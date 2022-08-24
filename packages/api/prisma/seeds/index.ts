import { PrismaClient } from '@prisma/client';

import { categories } from './data/categories';

const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({ data: categories, skipDuplicates: true });
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
