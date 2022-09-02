import { ApolloClient, ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import App from 'next/app';

import Header from '../components/Header';
import { getCurrentUser } from '../lib/getCurrentUser';
import withApollo from '../lib/withApollo';
import { ThemeProvider, theme } from '../styles';
import GlobalStyles from '../styles/GlobalStyles';

interface Props extends AppProps {
  apolloClient: ApolloClient<any>;
  me: any;
  userAgent: string;
}

class Kordio extends App<Props> {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const userAgent = ctx.req
      ? ctx.req.headers['user-agent']
      : navigator.userAgent;

    const me = await getCurrentUser(ctx.apolloClient);

    return { pageProps, me, userAgent };
  }

  render() {
    const { Component, pageProps, apolloClient, router, me, userAgent } =
      this.props;

    return (
      <>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            {router.pathname !== '/' &&
              router.pathname !== '/auth/[provider]/redirect' && (
                <Header me={me} />
              )}
            <Component
              me={me}
              apolloClient={apolloClient}
              {...pageProps}
            ></Component>
          </ThemeProvider>
        </ApolloProvider>
      </>
    );
  }
}

export default withApollo(Kordio);
