import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import PortfolioWorkItem from './PortfolioWorkItem';
import { portfolioItems } from '../../constants';

const PortfolioGrid = ({ sx }) => {
  return (
    <Box sx={{ sx }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
        Projects
      </Typography>
      <Grid container rowSpacing={6} columnSpacing={5} sx={{ mb: 4 }}>
        {portfolioItems.map((item) => (
          <Grid size={{ xs: 12, md: 6 }} key={item.id}>
            <PortfolioWorkItem item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PortfolioGrid;
