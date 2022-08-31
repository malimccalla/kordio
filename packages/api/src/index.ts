import 'dotenv/config';

import http from 'http';

import { PrismaClient } from '@prisma/client';
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';

import schema from './schema';

const port = process.env.PORT || 4000;
const frontEndHost = 'http://localhost:3000';

const startServer = async () => {
  const app = express();
  const httpServer = http.createServer(app);
  const prisma = new PrismaClient();

  const corsOptions = {
    origin: [frontEndHost],
  };

  app.use(cors(corsOptions));

  const apolloServer = new ApolloServer({
    schema,
    context: { prisma },
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
