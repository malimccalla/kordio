import { Resolvers } from '../../typings/types';

const resolvers: Resolvers = {
  Query: {
    companies: async (_, __, { prisma }) => {
      const companies = prisma.company.findMany();

      return companies;
    },
    company: (_, { where }, { prisma }) => {
      if (where.id) {
        const company = prisma.company.findUnique({ where: { id: where.id } });

        return company;
      }

      if (where.slug) {
        const company = prisma.company.findUnique({
          where: { slug: where.slug },
        });

        return company;
      }

      return null;
    },
    isCompanySavedByUser: async (_, { where }, { prisma, session }) => {
      if (!session.userId || !where.id) return false;

      const isSaved = await prisma.usersSavedCompanies.findUnique({
        where: {
          companyId_userId: { companyId: where.id, userId: session.userId },
        },
      });

      return !!isSaved;
    },
  },
  Mutation: {
    createCompany: async (_, { input }, { prisma }) => {
      if (!input.name) {
        return {
          ok: false,
          errors: [
            { path: 'createCompany', message: 'name of company is required' },
          ],
        };
      }

      const company = await prisma.company.create({
        // @ts-ignore
        data: input,
      });

      return { ok: true, errors: null, company };
    },
  },
  Company: {
    categories: async (company, _, { prisma }) => {
      const categories = await prisma.category.findMany({
        where: { companies: { some: { companyId: company.id } } },
      });

      return categories;
    },
    savedByUsers: async (company, _, { prisma }) => {
      const users = await prisma.user.findMany({
        where: { savedCompanies: { some: { companyId: company.id } } },
      });

      return users;
    },
  },
};

export default resolvers;
