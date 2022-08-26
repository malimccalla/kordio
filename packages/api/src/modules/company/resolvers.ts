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
      const res = await prisma.categoriesOnCompanies.findMany({
        where: { companyId: company.id },
        include: { category: true },
      });

      return res.map((data) => data.category);
    },
  },
};

export default resolvers;
