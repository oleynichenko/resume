import React from 'react';
import { Typography, Grid, Divider } from '@mui/material';
import { TECHNOLOGIES, WEBSITE_FEATURES } from '../../constants.js';

const PortfolioFeatures = () => {
  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant="h6" sx={{ fontWeight: 400, textAlign: 'center' }}>
          Websites Features
        </Typography>
        <Divider sx={{ mt: 0.5, mb: 1 }} />
        <Grid container spacing={1}>
          {WEBSITE_FEATURES.map((feature, index) => (
            <Grid size={6} key={index}>
              <Typography
                sx={{ textAlign: { xs: 'center', md: 'left' } }}
                variant="body2"
              >
                {feature}
              </Typography>
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
          {TECHNOLOGIES.map((tech, index) => (
            <Grid size={6} key={index}>
              <Typography
                sx={{ textAlign: { xs: 'center', md: 'left' } }}
                variant="body2"
              >
                {tech}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export { PortfolioFeatures };
