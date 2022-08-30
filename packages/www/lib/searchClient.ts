import algoliasearch from 'algoliasearch/lite';

const algoliaAppId = 'K0ET4UIZEL';
const algoliaSearchOnlyKey = '5d8cdf49f90a50a4839a08fd68c6b98e';

if (!algoliaAppId) {
  throw new Error(
    'You must set the algolia app id in the environment variables'
  );
}

if (!algoliaSearchOnlyKey) {
  throw new Error(
    'You must set the algolia search only key in the environment variables'
  );
}

export const searchClient = algoliasearch(algoliaAppId, algoliaSearchOnlyKey);
