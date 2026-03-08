import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import PortfolioWorkItem from './PortfolioWorkItem';
import { useTranslation } from 'react-i18next';

const PortfolioGrid = ({ title, items, sx }) => {
  const { t } = useTranslation();

  return (
    <Box sx={sx}>
      <Typography
        variant="h4"
        sx={{ mb: { xs: 3, md: 5 }, textAlign: 'center' }}
      >
        {t(title)}
      </Typography>
      <Grid container rowSpacing={8} columnSpacing={5}>
        {items.map((item) => (
          <Grid size={{ xs: 12, md: 6 }} key={item.id}>
            <PortfolioWorkItem item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PortfolioGrid;
