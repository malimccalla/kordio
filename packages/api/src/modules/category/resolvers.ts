import { Resolvers } from '../../typings/types';

const resolvers: Resolvers = {
  Query: {
    categories: (_, __, { prisma }) => {
      return prisma.category.findMany();
    },
  },
  Mutation: {},
  Category: {
    companies: async (category, _, { prisma }) => {
      const res = await prisma.categoriesOnCompanies.findMany({
        where: { categoryId: category.id },
        include: { company: true },
      });

      return res.map((data) => data.company);
    },
  },
};

export default resolvers;
