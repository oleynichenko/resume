import React from 'react';
import PortfolioHeader from '../components/portfolio/PortfolioHeader';
import { PortfolioDescription } from '../components/portfolio/PortfolioDescription';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import { motion } from 'framer-motion';
import { Container } from '@mui/material';

const PortfolioPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container
        // TODO: check this
        sx={{
          pt: { xs: 2, md: 10 },
          pb: { xs: 3, md: 10 },
          maxWidth: { xs: '520px', md: '1500px' },
        }}
        maxWidth={false}
      >
        <PortfolioHeader sx={{ mb: 10 }} />
        <PortfolioDescription sx={{ mb: 10 }} />
        <PortfolioGrid />
      </Container>
    </motion.div>
  );
};

export { PortfolioPage };
