import React from 'react';
import { Grid, Typography, Link } from '@mui/material';
// import { Link } from 'react-router';
import { PortfolioFeatures } from './PortfolioFeatures';
import { useTranslation, Trans } from 'react-i18next';

const RefactoredLink = ({ children }) => {
  return (
    <Link
      sx={{
        color: 'inherit',
        textDecorationColor: 'inherit',
        '&:hover': { color: 'primary.main' },
      }}
      href="https://github.com/oleynichenko/resume"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
};

const PortfolioDescription = ({ sx }) => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={6} sx={sx}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
          {t('portfolio.description.firstProjects.title')}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
          {t('portfolio.description.firstProjects.text')}
        </Typography>
        <PortfolioFeatures />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
          {t('portfolio.description.currentWork.title')}
        </Typography>
        {/* https://github.com/oleynichenko/resume */}
        <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
          <Trans
            i18nKey="portfolio.description.currentWork.text1"
            components={[<RefactoredLink />]}
          />
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
          {t('portfolio.description.currentWork.text2')}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
          {t('portfolio.description.currentWork.text3')}
        </Typography>
      </Grid>
    </Grid>
  );
};

export { PortfolioDescription };
