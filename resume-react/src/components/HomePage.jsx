import About from './About.jsx';
import Contacts from './Contacts.jsx';
import Education from './Education.jsx';
import Experience from './Experience.jsx';
import Skills from './Skills.jsx';
import Footer from './Footer.jsx';
import { Stack } from '@mui/material';

const HomePage = () => {
  return (
    <>
      <About sx={{ marginBottom: 9 }} />
      <Contacts sx={{ marginBottom: 8 }} />
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
        <Education />
        <Experience />
      </Stack>
      <Skills />
      <Footer />
    </>
  );
};

export { HomePage };
