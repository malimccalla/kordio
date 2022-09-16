import { PrismaClient } from '@prisma/client';

import { companiesIndex } from '../../services/algolia';
import { parentCategories, subCategories } from './data/categories';
import categoriesOnCompaniesData from './data/json/categoriesOnCompanies';
import companies from './data/json/companies';

const prisma = new PrismaClient();

async function main() {
  await prisma.categoriesOnCompanies.deleteMany({});
  await prisma.company.deleteMany({});
  await prisma.category.deleteMany({});

  await prisma.category.createMany({
    data: [...parentCategories, ...subCategories],
    skipDuplicates: true,
  });

  await prisma.company.createMany({ data: companies, skipDuplicates: true });

  await prisma.categoriesOnCompanies.createMany({
    data: categoriesOnCompaniesData,
    skipDuplicates: true,
  });

  // Uncomment to replace algolia data when running seeds

  const companiesWithCatgories = await prisma.company.findMany({
    include: {
      categories: {
        include: { category: { include: { parent: true } } },
      },
    },
  });

  const algoliaData = companiesWithCatgories.map((company) => {
    return {
      ...company,
      categories: company.categories.map((c) => c.category),
    };
  });

  await companiesIndex.replaceAllObjects(algoliaData, {
    autoGenerateObjectIDIfNotExist: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
