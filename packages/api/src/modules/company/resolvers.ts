import { nanoid } from 'nanoid';
import slugify from 'slugify';

import { companiesIndex } from '../../services/algolia';
import { CreateCompanyInput, Resolvers } from '../../typings/types';

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

      const slug = `${slugify(input.name)}-${nanoid(6)}`;

      const data = {
        name: input.name,
        address: input.address,
        description: input.description,
        location: input.location,
        note: input.note,
        website: input.website,
        contactEmail: input.website,
        slug,
      };

      const company = await prisma.company.create({
        data: {
          categories: { create: [{ categoryId: input.primaryCategoryId! }] },
          ...data,
        },
        include: {
          categories: {
            include: {
              category: { select: { name: true, id: true, color: true } },
            },
          },
        },
      });

      const categories = company.categories.map((cat: any) => cat.category);

      const algoliaData = {
        id: company.id,
        name: company.name,
        website: company.website,
        phoneNumber: company.phoneNumber,
        description: company.description,
        primaryCategory: company.categories[0].category.name,
        updatedAt: company.updatedAt,
        createdAt: company.createdAt,
        categories,
      };

      await companiesIndex.saveObject(algoliaData, {
        autoGenerateObjectIDIfNotExist: true,
      });

      return { ok: true, errors: null };
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
