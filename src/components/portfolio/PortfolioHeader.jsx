import React from 'react';
import { Stack, Box, Typography, Button, Link } from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router';
import { LanguagePopover } from '../LanguagePopover';
import { useTranslation, Trans } from 'react-i18next';

const GitHubLink = ({ children }) => (
  <Link
    sx={{
      color: 'inherit',
      textDecorationColor: 'inherit',
      '&:hover': { color: 'primary.main' },
    }}
    href="https://github.com/oleynichenko"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </Link>
);

const PortfolioHeader = ({ sx }) => {
  const { lang } = useParams();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        ...sx,
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          flexGrow: 1,
          mb: 4,
        }}
      >
        <Button component={RouterLink} to={`/${lang}`} size="small">
          {t('portfolio.header.goBack')}
        </Button>
        <LanguagePopover />
      </Stack>
      <Typography
        sx={{ textTransform: 'uppercase', lineHeight: 1, textAlign: 'center' }}
        variant="h3"
      >
        <Trans
          i18nKey="portfolio.header.title"
          components={[<GitHubLink />]}
        />
      </Typography>
    </Box>
  );
};

export default PortfolioHeader;
