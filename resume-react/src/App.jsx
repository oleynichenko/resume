import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './global.css';
import './locales/i18n';
import { HomePage } from './components/HomePage.jsx';
import { Layout } from './components/Layout.jsx';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

let theme = createTheme({
  typography: {
    fontFamily: '"PT Sans Narrow", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
      letterSpacing: 1,
    },
    h4: {
      fontWeight: 700,
    },
    body1: {
      fontSize: 18,
    },
    // h5: {
    //   fontWeight: 700,
    // },
    h6: {
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: '#ff0000',
    },
    text: {
      primary: '#4c4c4c',
    },
  },
});
console.log(theme);

theme = responsiveFontSizes(theme);

function App() {
  const { i18n } = useTranslation();

  dayjs.locale(i18n.resolvedLanguage);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <HomePage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
