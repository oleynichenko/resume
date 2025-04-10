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

const HomePage = () => {
  return (
    <Layout>
      <style>{scrollbarStyles}</style>
      <About sx={{ marginBottom: 9 }} />
      <Contacts sx={{ marginBottom: 8 }} />
      <Stack
        direction="row"
        spacing={7}
        sx={{
          marginBottom: 8,
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
        direction="row"
        spacing={7}
        sx={{
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
