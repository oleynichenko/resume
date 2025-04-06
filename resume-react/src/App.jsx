import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './global.css';
import './locales/i18n';
import { HomePage } from './components/HomePage.jsx';
import { Layout } from './components/Layout.jsx';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

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
