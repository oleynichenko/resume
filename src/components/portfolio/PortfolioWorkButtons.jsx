import { Box, Button, Typography, Stack } from '@mui/material';

const PortfolioWorkButtons = ({ links, color, colorDark, features }) => {
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
          Project features
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
              {feature}
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
          View Code
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
            Open website
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default PortfolioWorkButtons;
