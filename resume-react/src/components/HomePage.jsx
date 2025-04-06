import About from './About.jsx';
import Contacts from './Contacts.jsx';
import Education from './Education.jsx';
import Experience from './Experience.jsx';
import Skills from './Skills.jsx';
import Footer from './Footer.jsx';

const HomePage = () => {
  return (
    <>
      <About sx={{ marginBottom: 9 }} />
      <Contacts sx={{ marginBottom: 8 }} />
      <Education />
      <Experience />
      <Skills />
      <Footer />
    </>
  );
};
export { HomePage };
