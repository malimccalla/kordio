import axios from 'axios';
import { useEffect } from 'react';

import { LOGIN_MUTATION } from '../../../data/user';
import { apiEndpoint } from '../../../lib/constants';
import { redirect } from '../../../lib/redirect';

const AuthRedirect = (props: any) => {
  const { account, apolloClient } = props;

  useEffect(() => {
    const googleLoginAndRedirect = async () => {
      const { data } = await apolloClient.mutate({
        mutation: LOGIN_MUTATION,
        variables: {
          input: {
            email: account.userInfo.email,
            name: account.userInfo.name,
            givenName: account.userInfo.given_name,
            familyName: account.userInfo.family_name,
            locale: account.userInfo.locale,
            gender: account.userInfo.gender,
            idToken: account.tokens.id_token,
            socialProfileImageUrl: account.userInfo.picutre,
            socialId: account.userInfo.id,
          },
        },
      });

      if (!data || !data.login) {
        return;
      }

      if (data.login.ok) {
        try {
          await apolloClient.cache.reset();

          redirect({}, '/');
        } catch (error) {
          // set formik error
          console.log(error);
        }
      } else {
      }
    };

    googleLoginAndRedirect();
  }, [account, apolloClient]);

  return null;
};

AuthRedirect.getInitialProps = async (ctx: any) => {
  // @ts-ignore: Query does exist on req
  if (!ctx || !ctx.req || !ctx.query || !ctx.query.code) {
    return { account: null };
  }

  const code = ctx.query.code;
  const state = ctx.query.state;

  try {
    const res = await axios.get(
      `${apiEndpoint}/auth/google/callback?code=${code}`
    );

    if (!res || !res.data || !res.data.account) {
      console.log('No res or data');

      return { account: null };
    }

    return { account: res.data.account };
  } catch (error) {
    console.log('error', error);
    return { account: null };
  }
};

export default AuthRedirect;
