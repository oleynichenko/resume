import { useTranslation } from 'react-i18next';
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import './global.css';
import './locales/i18n';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/ru';
import 'dayjs/locale/uk';
import { HomePage } from './pages/HomePage.jsx';
import { PortfolioPage } from './pages/PortfolioPage.jsx';
import { NotFoundPage } from './pages/NotFoundPage.jsx';
import { LanguageGuard } from './LanguageGuard.jsx';

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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1180,
      lg: 1200,
      xl: 1536,
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  const { i18n } = useTranslation();

  const lang = i18n.resolvedLanguage === 'ua' ? 'uk' : i18n.resolvedLanguage;

  dayjs.locale(lang);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={`/${i18n.language}`} replace />}
          />
          <Route path="/:lang" element={<LanguageGuard />}>
            <Route index element={<HomePage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Route>
          <Route path="/404" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
