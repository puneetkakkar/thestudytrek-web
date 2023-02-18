import '@/styles/globals.css';
import { theme } from '@/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Rubik } from '@next/font/google';
import type { AppProps } from 'next/app';

const rubik = Rubik({
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--rubik-font',
  subsets: ['latin']
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={rubik.variable}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
