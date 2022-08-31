import { ApolloClient, NormalizedCache } from '@apollo/client';

import { ME_QUERY } from '../data/user';

export const getCurrentUser = async (
  apolloClient: ApolloClient<NormalizedCache>
): Promise<any> => {
  try {
    const res = await apolloClient.query({
      query: ME_QUERY,
    });

    return res.data.me;
  } catch (error) {
    console.log(error);

    return null;
  }
};
