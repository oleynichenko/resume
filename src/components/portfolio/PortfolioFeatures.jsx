import React from 'react';
import { Typography, Grid, Divider } from '@mui/material';

const PortfolioFeatures = () => {
  const websiteFeatures = [
    'Cross-browser compatibility (IE11+)',
    'Responsive vs. Adaptive Design',
    'Semantic markup',
    'Correct work without CSS и JS',
    'Component Layout',
    'Image Optimization',
  ];

  const technologies = [
    'HTML5/Pug, CSS3/SASS',
    'Javascript, TypeScript',
    'NodeJS + Express + MongoDB',
    'Angular 7+, RxJs, NgRx',
    'React, Redux',
    'Material Design, Material-UI, PrimeNg frameworks',
  ];

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant="h6" sx={{ fontWeight: 400, textAlign: 'center' }}>
          Websites Features
        </Typography>
        <Divider sx={{ mt: 0.5, mb: 1 }} />
        <Grid container spacing={1}>
          {websiteFeatures.map((feature, index) => (
            <Grid size={6} key={index}>
              <Typography variant="body2">{feature}</Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant="h6" sx={{ fontWeight: 400, textAlign: 'center' }}>
          Used Technologies
        </Typography>
        <Divider sx={{ mt: 0.5, mb: 1 }} />
        <Grid container spacing={1}>
          {technologies.map((tech, index) => (
            <Grid size={6} key={index}>
              <Typography variant="body2">{tech}</Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export { PortfolioFeatures };
