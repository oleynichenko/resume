import { Box, Button, Typography, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';

const PortfolioWorkButtons = ({ links, color, colorDark, features }) => {
  const { t } = useTranslation();

  return (
    <Stack
      sx={{
        width: { xs: '85%', md: '80%', lg: '70%' },
        flexDirection: 'row',
        alignItems: 'center',
        gap: 1.5,
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <Typography variant="h5" sx={{ mb: 0.5 }}>
          {t('portfolio.workItem.projectFeatures')}
        </Typography>
        <Stack>
          {features.map((feature, index) => (
            <Typography
              key={index}
              sx={{
                px: 0,
              }}
              variant="body1"
            >
              {t(feature)}
            </Typography>
          ))}
        </Stack>
      </Box>

      <Stack sx={{ gap: { xs: 2, md: 3 }, flexShrink: 0 }}>
        <Button
          variant="contained"
          href={links.code}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            backgroundColor: colorDark || color,
          }}
        >
          {t('portfolio.workItem.viewCode')}
        </Button>
        {links.demo && (
          <Button
            variant="contained"
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              backgroundColor: colorDark || color,
            }}
          >
            {t('portfolio.workItem.openWebsite')}
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default PortfolioWorkButtons;
