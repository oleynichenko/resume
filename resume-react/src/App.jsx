import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from 'react-router';
import './global.css';
import './locales/i18n';
import { HomePage } from './components/HomePage.jsx';
import { PortfolioPage } from './components/PortfolioPage.jsx';
import { NotFoundPage } from './components/NotFoundPage.jsx';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

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

theme = responsiveFontSizes(theme);

const LanguageRoute = ({ children }) => {
  const { i18n } = useTranslation();
  const { lang } = useParams();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return children;
};

function App() {
  const { i18n } = useTranslation();

  dayjs.locale(i18n.resolvedLanguage);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={`/${i18n.language}`} replace />}
          />
          <Route
            path="/:lang"
            element={
              <LanguageRoute>
                <HomePage />
              </LanguageRoute>
            }
          />
          <Route
            path="/:lang/portfolio"
            element={
              <LanguageRoute>
                <PortfolioPage />
              </LanguageRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
