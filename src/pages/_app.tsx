import '@/styles/globals.css';
import { theme } from '@/theme';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Rubik } from '@next/font/google';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

const cache = createCache({
  key: 'css',
  prepend: true
});

export const rubik = Rubik({
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--rubik-font',
  subsets: ['latin']
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={cache}>
      <div className={rubik.variable}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </div>
    </CacheProvider>
  );
}
