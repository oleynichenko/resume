import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './global.css';
import { Box } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Contacts from './components/Contacts';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Header />
        <About />
        <Contacts />
        <Education />
        <Experience />
        <Skills />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
