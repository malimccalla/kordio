import 'dotenv/config';

import http from 'http';

import { PrismaClient } from '@prisma/client';
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import connectRedis from 'connect-redis';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import helmet from 'helmet';
import morgan from 'morgan';

import { redisSessionPrefix, sessionCookieName } from './constants';
import schema from './schema';
import {
  getGoogleAccountFromCode,
  getGoogleAuthUrl,
} from './services/googleAuth';
import { redis } from './services/redis';
import { Context } from './typings';

// https://www.prisma.io/docs/guides/performance-and-optimization/connection-management#prismaclient-in-serverless-environments
const prisma = new PrismaClient();

const startServer = async () => {
  const sessionSecret = process.env.SESSION_SECRET;
  const env = process.env.NODE_ENV;
  const frontendHost = process.env.FRONTEND_HOST;
  const deploymentEnv = process.env.DEPLOY_ENV;
  const port = process.env.PORT || '4000';

  if (!sessionSecret) {
    throw new Error(
      'SESSION_SECRET must be set in the environment variables. For development this can be any string value.'
    );
  }

  if (!frontendHost) {
    throw new Error('FRONTEND_HOST must be set in the environment variables');
  }

  const app = express();
  const router = express.Router();
  const RedisStore = connectRedis(session);

  const store = new RedisStore({
    client: redis,
    prefix: redisSessionPrefix,
  });

  const httpServer = http.createServer(app);

  const corsOptions: cors.CorsOptions = {
    origin: [frontendHost],
    credentials: true,
  };

  const sessionMiddleware = session({
    store,
    resave: false,
    name: sessionCookieName,
    proxy: true,
    secret: sessionSecret,
    saveUninitialized: false,
    cookie: {
      path: '/',
      httpOnly: true,
      secure: deploymentEnv === 'production' || deploymentEnv === 'staging',
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    },
  });

  const landingPagePlugin =
    deploymentEnv === 'production' || deploymentEnv === 'staging'
      ? ApolloServerPluginLandingPageProductionDefault({ embed: false })
      : ApolloServerPluginLandingPageLocalDefault({
          embed: true,
        });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req }): Context => {
      return { prisma, session: req.session, redis };
    },
    csrfPrevention: false, // TODO: Change back to true
    cache: 'bounded',
    introspection: env === 'development',
    /**
     * What's up with this embed: true option?
     * These are our recommended settings for using AS;
     * they aren't the defaults in AS3 for backwards-compatibility reasons but
     * will be the defaults in AS4. For production environments, use
     * ApolloServerPluginLandingPageProductionDefault instead.
     **/
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      landingPagePlugin,
    ],
  });

  if (env === 'production') {
    app.use(helmet());
  }

  app.use(cors(corsOptions));
  app.use(sessionMiddleware);
  app.use(morgan('common'));

  router.get('/auth/google', (req, res) => {
    try {
      const url = getGoogleAuthUrl(req.query.referrer as string);

      res.status(200).json({ authUrl: url, ok: true });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        ok: false,
        error: 'Something went wrong',
      });
    }
  });

  router.get('/deploy-test', (req, res) => {
    res.status(200).send('ok');
  });

  router.get('/auth/google/callback', async (req, res) => {
    if (!req || !req.query || !req.query.code) {
      res.status(401).send('Unauthorized');
    }

    const code = req.query.code as string;

    try {
      const account = await getGoogleAccountFromCode(code);

      if (!account || !account.userInfo || !account.userInfo.email) {
        res
          .status(500)
          .send('Could not get google account from authorization code');
      }

      res.status(200).json({ account });
      // req.session = user?.id;
    } catch (error) {
      console.log(error);

      res.status(500).send('error');
    }
  });

  // In prod we need to prefix requests with /api
  // {@see} {@link} https://stackoverflow.com/q/73614898/6392640
  if (env !== 'development') {
    app.use('/api', router);
  } else {
    app.use('/', router);
  }

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    path: '/',
    cors: corsOptions,
  });

  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));

  console.log(`???? Server ready at ${apolloServer.graphqlPath}`);
};

startServer();
