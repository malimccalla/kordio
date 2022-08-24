import { PrismaClient } from '@prisma/client';

import { categories } from './data/categories';
import { categoriesOnCompanies } from './data/categoriesOnCompanies';
import { companies } from './data/companies';

const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({ data: categories, skipDuplicates: true });
  await prisma.company.createMany({ data: companies, skipDuplicates: true });
  await prisma.categoriesOnCompanies.createMany({
    data: categoriesOnCompanies,
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
