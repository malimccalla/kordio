import algoliasearch from 'algoliasearch/lite';

const algoliaAppId = 'S6DWQBDLJ7';
const algoliaSearchOnlyKey = 'b24d091602a8bedab523b1bca545e699';

if (!algoliaAppId) {
  throw new Error('You must set the algolia app id in the environment variables');
}

if (!algoliaSearchOnlyKey) {
  throw new Error(
    'You must set the algolia search only key in the environment variables'
  );
}

export const searchClient = algoliasearch(algoliaAppId, algoliaSearchOnlyKey);