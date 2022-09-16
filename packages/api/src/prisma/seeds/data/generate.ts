import fs from 'fs';

import { nanoid } from 'nanoid';
import slugify from 'slugify';
import { v4 } from 'uuid';

import { companies } from './companies';

const companyData = companies.map((c) => {
  return {
    ...c,
    id: v4(),
    slug: `${slugify(c.name, { remove: /[*+~.()'"!:@]/g })}-${nanoid(
      6
    )}`.toLocaleLowerCase(),
  };
});

const companiesOnCategoiresData: any = [];

companyData.forEach((c: any) => {
  c.categories.forEach((cat: string) => {
    companiesOnCategoiresData.push({
      companyId: c.id,
      categoryId: cat,
    });
  });
});

fs.writeFile(
  'categoriesOnCompanies.json',
  JSON.stringify(companiesOnCategoiresData),
  'utf8',
  () => {}
);

const writeCompaniesData = companyData.map(({ categories, ...rest }) => rest);

fs.writeFile(
  'companies.json',
  JSON.stringify(writeCompaniesData),
  'utf8',
  () => {}
);
