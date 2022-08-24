import { Resolvers } from '../../typings/types';

const resolvers: Resolvers = {
  Query: {
    categories: (_, __, { prisma }) => {
      return prisma.category.findMany();
    },
  },
  Mutation: {},
};

export default resolvers;
