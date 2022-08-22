import 'dotenv/config';

import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

import schema from './schema';

const port = process.env.PORT || 4000;
const prisma = new PrismaClient();

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
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

apolloServer.listen({ port }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
