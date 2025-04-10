import { Stack } from '@mui/material';
import 'simplebar-react/dist/simplebar.min.css';
import About from './About.jsx';
import Contacts from './Contacts.jsx';
import Education from './Education.jsx';
import Experience from './Experience.jsx';
import Skills from './Skills.jsx';
import Footer from './Footer.jsx';
import Knowledge from './Knowledge.jsx';
import { Layout } from './Layout.jsx';

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
