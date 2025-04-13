import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Link, useParams } from 'react-router';
import { LanguagePopover } from '../LanguagePopover';

const PortfolioHeader = ({ sx }) => {
  const { lang } = useParams();

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
        <Button component={Link} to={`/${lang}`} size="small">
          Go back
        </Button>
        <LanguagePopover />
      </Stack>
      <Typography
        sx={{ textTransform: 'uppercase', lineHeight: 1, textAlign: 'center' }}
        variant="h3"
      >
        Portfolio
      </Typography>
    </Box>
  );
};

export default PortfolioHeader;
