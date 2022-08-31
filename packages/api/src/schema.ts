import * as path from 'path';

import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';
import * as glob from 'glob';

const pathToModules = path.join(__dirname, './modules');

const typeDefs = loadFilesSync(path.join(`${pathToModules}/**/schema.graphql`));

const resolvers = glob
  .sync(`${pathToModules}/**/resolvers.?s`)
  .map((resolver) => require(resolver).default);

const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(typeDefs),
  resolvers: { ...mergeResolvers(resolvers) },
});

export default schema;
