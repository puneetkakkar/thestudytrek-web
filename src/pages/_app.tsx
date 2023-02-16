import '@/styles/globals.css';
import { theme } from '@/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Poppins } from '@next/font/google';
import type { AppProps } from 'next/app';

const poppins = Poppins({
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--poppins-font',
  subsets: ['latin']
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.variable}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
