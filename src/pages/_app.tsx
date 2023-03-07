import '@/styles/globals.css';
import theme from '@/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import localFont from '@next/font/local';
import type { AppProps } from 'next/app';

export const RobotoSlabFont = localFont({
  src: '../../public/fonts/RobotoSlab-VariableFont_wght.ttf',
  variable: '--roboto-slab'
});

export const InterFont = localFont({
  src: '../../public/fonts/Inter-VariableFont_slnt,wght.ttf',
  variable: '--inter'
});

export const NanumMyeongjoFont = localFont({
  src: [
    {
      path: '../../public/fonts/Nanum_Myeongjo/NanumMyeongjo-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Nanum_Myeongjo/NanumMyeongjo-Bold.ttf',
      weight: '700',
      style: 'bold'
    },
    {
      path: '../../public/fonts/Nanum_Myeongjo/NanumMyeongjo-ExtraBold.ttf',
      weight: '800',
      style: 'extra-bold'
    }
  ],
  variable: '--nanum-myeongjo'
});

export const AntonFont = localFont({
  src: [
    {
      path: '../../public/fonts/Anton/Anton-Regular.ttf',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--anton'
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={RobotoSlabFont.className}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
