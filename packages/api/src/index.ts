import 'dotenv/config';

import { ApolloServer, gql } from 'apollo-server';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import express from 'express';

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
    foo: String
    bar: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
    bar: 'bar bar',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
    foo: 'foo foo',
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
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

server.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});