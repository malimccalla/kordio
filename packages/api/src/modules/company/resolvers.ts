import { PrismaClient } from '@prisma/client';

import { Resolvers } from '../../typings/types';

const resolvers: Resolvers = {
  Query: {
    companies: async (_, __, { prisma }) => {
      const companies = prisma.company.findMany();
      return companies;
    },
  },
};

export default resolvers;
