import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { API_ENDPOINT, DEPLOY_ENV } from './constants';

const isBrowser = typeof window !== 'undefined';

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!isBrowser) {
  // @ts-ignore: fetch does not exist on global
  global.fetch = fetch;
}

function create(
  initialState: NormalizedCacheObject,
  { getToken }: { getToken(): unknown }
) {
  if (!API_ENDPOINT) {
    throw new Error(
      'You must set the api endpoint in the environment variables'
    );
  }

  const credentials =
    DEPLOY_ENV === 'production' || DEPLOY_ENV === 'staging'
      ? 'same-origin'
      : 'include';

  const httpLink = createHttpLink({
    uri: API_ENDPOINT,
    credentials,
  });

  const authLink = setContext((_, { headers }) => {
    const token = getToken();

    return {
      headers: {
        ...headers,
        cookie: token,
      },
    };
  });

  const link = authLink.concat(httpLink);

  return new ApolloClient({
    // Disables forceFetch on the server (so queries are only run once)
    ssrMode: !isBrowser,
    link,
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export default function initApollo(
  initialState: NormalizedCacheObject,
  options: { getToken(): unknown }
): ApolloClient<NormalizedCacheObject> {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return create(initialState, options);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
}
