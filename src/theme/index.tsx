import { AntonFont, NanumMyeongjoFont } from '@/pages/_app';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      // main: '#0d6efd',
      // main: '#f84f39',
      // main: '#f8381f',
      main: '#EA384D',
      light: '#6c9cff',
      // dark: '#0044c9',
      dark: '#6C00FF',
      contrastText: '#fff'
    },
    secondary: {
      main: '#ff5200',
      light: '#ff863c',
      dark: '#c31200',
      contrastText: '#fff'
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f'
    },
    warning: {
      main: '#ffa726',
      light: '#ffb74d',
      dark: '#f57c00'
    },
    info: {
      main: '#29b6f6',
      light: '#4fc3f7',
      dark: '#0288d1'
    },
    success: {
      main: '#66bb6a',
      light: '#81c784',
      dark: '#388e3c'
    }
  },
  typography: {
    fontFamily: NanumMyeongjoFont.style.fontFamily,
    h2: {
      fontFamily: AntonFont.style.fontFamily
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;
