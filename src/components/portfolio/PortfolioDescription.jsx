import React from 'react';
import { Box, Typography, Grid, List, ListItem } from '@mui/material';
import { PortfolioFeatures } from './PortfolioFeatures';

const PortfolioDescription = ({ sx }) => {
  return (
    <Grid container spacing={6} sx={sx}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
          First Projects
        </Typography>
        <Typography variant="body1" sx={{ mb: 1, textAlign: 'justify' }}>
          The projects showcased here were created between 2016 and 2017, at the
          very beginning of my professional journey as a developer. Even then, I
          focused on delivering clean, detail-oriented work and thoughtful user
          experiences.
        </Typography>
        <PortfolioFeatures />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
          How I Work Now
        </Typography>
        {/* https://github.com/oleynichenko/resume */}
        <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
          Since that time, my skills have grown significantly. You can explore
          the quality of my current work by reviewing the source code of this
          website (link below).
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
          It is built with React and the MUI component library, uses React
          Router for navigation, and supports three languages via localization.
          Animations are handled with Framer Motion, and code quality is
          maintained using Prettier and ESLint.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
          The application is automatically deployed to GitHub Pages. My passion
          for modern web development continues to grow, and I take pride in
          crafting intuitive, accessible, and maintainable applications.
        </Typography>
      </Grid>
    </Grid>
  );
};

export { PortfolioDescription };
