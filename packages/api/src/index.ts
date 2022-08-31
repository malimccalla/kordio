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
import { redis } from './services/redis';

const startServer = async () => {
  const sessionSecret = process.env.SESSION_SECRET;
  const env = process.env.NODE_ENV;
  const frontendHost = process.env.FRONTEND_HOST;
  const deploymentEnv = process.env.DEPLOY_ENV;
  // Port is set to 8080 in test environments
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

  const corsOptions = {
    origin: [frontendHost],
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
    context: ({ req }) => {
      return { prisma, session: req.session };
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
