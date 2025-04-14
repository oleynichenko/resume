import React from 'react';
import PortfolioHeader from '../components/portfolio/PortfolioHeader';
import { PortfolioDescription } from '../components/portfolio/PortfolioDescription';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import { motion } from 'motion/react';
import { Container } from '@mui/material';
import Footer from '../components/Footer.jsx';

const PortfolioPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container
        sx={{
          pt: { xs: 2, md: 4 },
          pb: 4,
          maxWidth: { xs: '520px', md: '1500px' },
        }}
        maxWidth={false}
      >
        <PortfolioHeader sx={{ mb: { xs: 5, md: 10 } }} />
        <PortfolioDescription sx={{ mb: { xs: 5, md: 11 } }} />
        <PortfolioGrid sx={{ mb: { xs: 10, md: 15 } }} />
        <Footer />
      </Container>
    </motion.div>
  );
};

export { PortfolioPage };
