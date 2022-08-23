import type { AppProps } from 'next/app';

import { ThemeProvider, theme } from '../styles';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps}></Component>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
