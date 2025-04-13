import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import PortfolioWorkItem from './PortfolioWorkItem';
import { portfolioItems } from '../../constants';
import { useTranslation } from 'react-i18next';

const PortfolioGrid = ({ sx }) => {
  const { t } = useTranslation();

  return (
    <Box sx={sx}>
      <Typography
        variant="h4"
        sx={{ mb: { xs: 3, md: 5 }, textAlign: 'center' }}
      >
        {t('portfolio.grid.title')}
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
