import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import Header from '../components/Header';
import { useApollo } from '../lib/apolloClient';
import { ThemeProvider, theme } from '../styles';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  const router = useRouter();

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {router.pathname !== '/' && <Header />}
          <Component {...pageProps}></Component>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
