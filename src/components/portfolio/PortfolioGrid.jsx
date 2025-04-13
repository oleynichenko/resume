import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import PortfolioWorkItem from './PortfolioWorkItem';
import { portfolioItems } from '../../constants';

const PortfolioGrid = ({ sx }) => {
  return (
    <Box sx={sx}>
      <Typography
        variant="h4"
        sx={{ mb: { xs: 3, md: 5 }, textAlign: 'center' }}
      >
        Projects (2016 - 2017)
      </Typography>
      <Grid container rowSpacing={8} columnSpacing={5}>
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
