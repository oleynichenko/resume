import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        p: 3,
      }}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        {t('notFound.title')}
      </Typography>
      <Typography variant="h4" sx={{ mb: 4 }}>
        {t('notFound.message')}
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate(`/`)}>
        {t('notFound.goHome')}
      </Button>
    </Box>
  );
};
