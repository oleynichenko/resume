import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Link, useParams } from 'react-router';
import { LanguagePopover } from '../LanguagePopover';

const PortfolioHeader = ({ sx }) => {
  const { lang } = useParams();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        position: 'relative',
        ...sx,
      }}
    >
      <Button component={Link} to={`/${lang}`} size="small">
        Go back
      </Button>
      <Typography
        sx={{ textTransform: 'uppercase', lineHeight: 1 }}
        variant="h3"
      >
        Portfolio
      </Typography>
      <LanguagePopover />
    </Stack>
  );
};

export default PortfolioHeader;
