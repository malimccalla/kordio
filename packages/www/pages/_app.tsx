import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import Header from '../components/Header';
import { ThemeProvider, theme } from '../styles';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  console.log(router);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {router.pathname !== '/' && <Header />}
        <Component {...pageProps}></Component>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
