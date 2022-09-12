import algoliasearch from 'algoliasearch';

const algoliaAppId = process.env.ALGOLIA_APP_ID;
const algoliaSecretKey = process.env.ALGOLIA_SECRET_KEY;
const deploymentEnv = process.env.DEPLOY_ENV || 'development';

if (!algoliaAppId) {
  throw new Error('ALGOLIA_APP_ID must be set in the environment variables.');
}

if (!algoliaSecretKey) {
  throw new Error(
    'ALGOLIA_SECRET_KEY must be set in the environment variables'
  );
}

const algoliaClient = algoliasearch(algoliaAppId, algoliaSecretKey);

export const companiesIndex = algoliaClient.initIndex(
  `${deploymentEnv}_companies`
);
