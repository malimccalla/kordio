import { PrismaClient } from '@prisma/client';

import { parentCategories, subCategories } from './data/categories';
import { categoriesOnCompanies } from './data/categoriesOnCompanies';
import { companies } from './data/companies';

const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({
    data: [...parentCategories, ...subCategories],
    skipDuplicates: true,
  });
  await prisma.company.createMany({
    data: companies,
    skipDuplicates: true,
  });
  await prisma.categoriesOnCompanies.createMany({
    data: categoriesOnCompanies,
    skipDuplicates: true,
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
