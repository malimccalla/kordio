import { Prisma } from '@prisma/client';

import { c1 } from './categories';
import { companies } from './companies';

const dataToinsert = companies.map((company, i) => {
  return { categoryId: c1, companyId: company.id };
});

export const categoriesOnCompanies: Prisma.Enumerable<Prisma.CategoriesOnCompaniesCreateManyInput> =
  dataToinsert;
