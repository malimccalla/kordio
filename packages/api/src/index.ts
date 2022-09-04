import 'dotenv/config';

import http from 'http';

import { PrismaClient } from '@prisma/client';
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import connectRedis from 'connect-redis';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import helmet from 'helmet';

import { redisSessionPrefix, sessionCookieName } from './constants';
import schema from './schema';
import {
  getGoogleAccountFromCode,
  getGoogleAuthUrl,
} from './services/googleAuth';
import { redis } from './services/redis';
import { Context } from './typings';

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
  const RedisStore = connectRedis(session);

  const store = new RedisStore({
    client: redis,
    prefix: redisSessionPrefix,
  });

  const httpServer = http.createServer(app);
  const prisma = new PrismaClient();

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

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req }): Context => {
      return { prisma, session: req.session, redis };
    },
    csrfPrevention: true,
    cache: 'bounded',
    /**
     * What's up with this embed: true option?
     * These are our recommended settings for using AS;
     * they aren't the defaults in AS3 for backwards-compatibility reasons but
     * will be the defaults in AS4. For production environments, use
     * ApolloServerPluginLandingPageProductionDefault instead.
     **/
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });

  if (env === 'production') {
    app.use(helmet());
  }

  app.use(cors(corsOptions));
  app.use(sessionMiddleware);

  app.get('/auth/google', (req, res) => {
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

  app.get('/auth/google/callback', async (req, res) => {
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

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    path: '/',
    cors: corsOptions,
  });

  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  console.log(
    `🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`
  );
};

startServer();
