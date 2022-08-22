import 'dotenv/config';

import http from 'http';

import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import express from 'express';

import schema from './schema';

const app = express();
const port = process.env.PORT || 4000;

const apolloServer = new ApolloServer({
  schema,
  csrfPrevention: true,
  cache: 'bounded',
  /**
   * What's up with this embed: true option?
   * These are our recommended settings for using AS;
   * they aren't the defaults in AS3 for backwards-compatibility reasons but
   * will be the defaults in AS4. For production environments, use
   * ApolloServerPluginLandingPageProductionDefault instead.
   **/
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

apolloServer.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
