import { Stack } from '@mui/material';
import { motion } from 'motion/react';
import 'simplebar-react/dist/simplebar.min.css';
import About from '../components/home/About.jsx';
import Contacts from '../components/home/Contacts.jsx';
import Education from '../components/home/Education.jsx';
import Experience from '../components/home/Experience.jsx';
import Skills from '../components/home/Skills.jsx';
import Footer from '../components/Footer.jsx';
import Knowledge from '../components/home/Knowledge.jsx';
import { Layout } from '../components/Layout.jsx';
import { varFade } from '../components/animate/variants/fade';

// Add custom styles for SimpleBar scrollbar
const scrollbarStyles = `
  .gradient-scrollbar .simplebar-scrollbar::before {
    background: linear-gradient(to bottom, #4a4a4a, #ff0000) !important;
    border-radius: 4px !important;
  }
`;

const MB_MOBILE = 12;
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
          gap: { xs: 12, md: 7 },
          '& > *': {
            flex: 1,
            minWidth: 0,
          },
        }}
        component={motion.div}
        variants={varFade('inUp', { distance: 24 })}
      >
        <Education />
        <Experience />
      </Stack>
      <Stack
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          mb: { xs: MB_MOBILE, md: MB_DESKTOP },
          gap: { xs: 12, md: 7 },
          '& > *': {
            flex: 1,
            minWidth: 0,
          },
        }}
        component={motion.div}
        variants={varFade('inUp', { distance: 24 })}
      >
        <Knowledge />
        <Skills />
      </Stack>
      <Footer />
    </Layout>
  );
};

export { HomePage };
