import { Stack } from '@mui/material';
import 'simplebar-react/dist/simplebar.min.css';
import About from '../components/About.jsx';
import Contacts from '../components/Contacts.jsx';
import Education from '../components/Education.jsx';
import Experience from '../components/Experience.jsx';
import Skills from '../components/Skills.jsx';
import Footer from '../components/Footer.jsx';
import Knowledge from '../components/Knowledge.jsx';
import { Layout } from '../components/Layout.jsx';

// Add custom styles for SimpleBar scrollbar
const scrollbarStyles = `
  .gradient-scrollbar .simplebar-scrollbar::before {
    background: linear-gradient(to bottom, #4a4a4a, #ff0000) !important;
    border-radius: 4px !important;
  }
`;

const MB_MOBILE = 7;
const MB_DESKTOP = 10;

const HomePage = () => {
  return (
    <Layout>
      <style>{scrollbarStyles}</style>
      <About sx={{ mb: { xs: MB_MOBILE, md: MB_DESKTOP } }} />
      <Contacts sx={{ mb: { xs: MB_MOBILE, md: MB_DESKTOP } }} />
      <Stack
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          mb: { xs: MB_MOBILE, md: MB_DESKTOP },
          gap: 7,
          '& > *': {
            flex: 1,
            minWidth: 0,
          },
        }}
      >
        <Education />
        <Experience />
      </Stack>
      <Stack
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          mb: { xs: MB_MOBILE, md: MB_DESKTOP },
          gap: 7,
          '& > *': {
            flex: 1,
            minWidth: 0,
          },
        }}
      >
        <Knowledge />
        <Skills />
      </Stack>
      <Footer />
    </Layout>
  );
};

export { HomePage };
