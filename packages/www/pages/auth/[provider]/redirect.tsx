import axios from 'axios';

import Page from '../../../components/Page';
import Text from '../../../components/Text';
import { redirect } from '../../../lib/redirect';

const AuthRedirect = ({ me }: any) => {
  console.log('MEE', me);

  return (
    <Page title="Kordio">
      <Text color="white">{JSON.stringify(me)}</Text>
    </Page>
  );
};

AuthRedirect.getInitialProps = async (ctx: any) => {
  console.log('Are we ==============================', ctx.query);
  // @ts-ignore: Query does exist on req
  if (!ctx || !ctx.req || !ctx.query || !ctx.query.code) {
    return { account: null };
  }

  // @ts-ignore: Query does exist on req
  const code = ctx.query.code;
  // @ts-ignore: Query does exist on req
  const state = ctx.query.state;

  console.log('LETS GO LETS GO================', ctx.query);

  try {
    const res = await axios.get(
      `http://localhost:4000/auth/google/callback?code=${code}`
    );

    // TODO
    // const { data } = await ctx.apolloClient.query({
    //   query: LOGIN_MUTATION,
    //   variables: { input: { email: res.data.userInfo.email } },
    // });

    console.log('COOKIE====', ctx.req.cookies['ksib']);

    redirect(ctx, '/');

    return {};

    // if (!res || !res.data || !res.data.account) {
    //   return { account: null };
    // }

    // return {
    //   account: res.data.account,
    //   state,
    //   emailInUse: res.data.emailInUse,
    // };
  } catch (error) {
    return { account: null };
  }
};

export default AuthRedirect;
