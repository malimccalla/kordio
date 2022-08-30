import { Prisma } from '@prisma/client';

import * as categories from './categories';
import { distributionAndMonetisationCompanies } from './companies/distributionAndMonetisation';
import { jobsTrainingAndCareersCompanies } from './companies/jobsTrainingAndCareers';
import { lawAndBusinessCompanies } from './companies/lawAndBusiness';
import { livePerformanceCompanies } from './companies/livePerformance';
import { merchAndPhysicalCompanies } from './companies/merchAndPhysical';
import { pressAndPRCompanies } from './companies/pressAndPr';
import { publishingAndSyncCompanies } from './companies/publishingAndSync';
import { recordLabelCompanies } from './companies/recordLabels';
import { studiosAndProductionCompanies } from './companies/studiosAndProduction';
import { technologyCompanies } from './companies/technology';

const livePerformance = livePerformanceCompanies.map((company, i) => {
  return { categoryId: categories.c1, companyId: company.id };
});

const recordLabels = recordLabelCompanies.map((company, i) => {
  return { categoryId: categories.c2, companyId: company.id };
});

const studiosAndProduction = studiosAndProductionCompanies.map((company, i) => {
  return { categoryId: categories.c3, companyId: company.id };
});

const radioBlogsAndMedia = radioBlogsAndMediaCompanies.map((company, i) => {
  return { categoryId: categories.c4, companyId: company.id };
});

const publishingAndSync = publishingAndSyncCompanies.map((company, i) => {
  return { categoryId: categories.c5, companyId: company.id };
});

const distributionAndMonetisation = distributionAndMonetisationCompanies.map(
  (company, i) => {
    return { categoryId: categories.c6, companyId: company.id };
  }
);

const jobsTrainingAndCareers = jobsTrainingAndCareersCompanies.map(
  (company, i) => {
    return { categoryId: categories.c7, companyId: company.id };
  }
);

// TODO: Video, Design, & Photography (categories.c8)

const lawAndBusiness = lawAndBusinessCompanies.map((company, i) => {
  return { categoryId: categories.c9, companyId: company.id };
});

const technology = technologyCompanies.map((company, i) => {
  return { categoryId: categories.c10, companyId: company.id };
});

const merchAndPhysical = merchAndPhysicalCompanies.map((company, i) => {
  return { categoryId: categories.c11, companyId: company.id };
});

// TODO: Funding & Grants (categories.c12)

const pressAndPR = pressAndPRCompanies.map((company, i) => {
  return { categoryId: categories.c13, companyId: company.id };
});

// TODO: Commnunity & Engagement (categories.c14)

const dataToinsert = [
  ...livePerformance,
  ...recordLabels,
  ...studiosAndProduction,
  ...radioBlogsAndMedia,
  ...publishingAndSync,
  ...distributionAndMonetisation,
  ...jobsTrainingAndCareers,
  ...lawAndBusiness,
  ...technology,
  ...merchAndPhysical,
  ...pressAndPR,
];

export const categoriesOnCompanies: Prisma.Enumerable<Prisma.CategoriesOnCompaniesCreateManyInput> =
  dataToinsert;
