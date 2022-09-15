import { PrismaClient } from '@prisma/client';

import { companiesIndex } from '../../services/algolia';
import { parentCategories, subCategories } from './data/categories';
import { categoriesOnCompanies } from './data/categoriesOnCompanies';
import { companies as companiesData } from './data/companies';

const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({
    data: [...parentCategories, ...subCategories],
    skipDuplicates: true,
  });

  await prisma.usersSavedCompanies.deleteMany({});
  await prisma.categoriesOnCompanies.deleteMany({});
  await prisma.company.deleteMany({});

  companiesData.forEach(async (company: any) => {
    await prisma.company.create({ data: company });
  });

  const companies = await prisma.company.findMany({
    include: { categories: { include: { category: true } } },
  });

  // console.log('INCLUDED', companies);

  const algoliaData = companies.map((company: any) => {
    return {
      ...company,
      categories: company.categories.map((c: any) => c.category),
    };
  });

  await companiesIndex.replaceAllObjects(algoliaData, {
    autoGenerateObjectIDIfNotExist: true,
  });

  // await prisma.company.createMany({
  //   data: companies,
  //   skipDuplicates: true,
  // });
  // await prisma.categoriesOnCompanies.createMany({
  //   data: categoriesOnCompanies,
  //   skipDuplicates: true,
  // });
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
