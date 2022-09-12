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

const usersIndex = algoliaClient.initIndex(`${deploymentEnv}_users`);

const releasesIndex = algoliaClient.initIndex(`${deploymentEnv}_releases`);

export { usersIndex, releasesIndex, algoliaClient };
