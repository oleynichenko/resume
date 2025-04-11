import { Box, Button, Typography, Stack } from '@mui/material';

const PortfolioWorkButtons = ({ links, color, colorDark, features }) => {
  return (
    <Stack
      sx={{
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{}}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          Project features
        </Typography>
        <Stack sx={{ pl: 1 }}>
          {features.map((feature, index) => (
            <Typography
              key={index}
              sx={{
                // py: 0.5,
                px: 0,
              }}
              variant="body1"
            >
              {feature}
            </Typography>
          ))}
        </Stack>
      </Box>

      <Stack sx={{ gap: 3, flexShrink: 0 }}>
        <Button
          variant="contained"
          href={links.code}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            backgroundColor: color,
            color: colorDark || '#fff',
            '&:hover': {
              backgroundColor: colorDark || 'primary.dark',
            },
          }}
        >
          View Code
        </Button>
        <Button
          variant="contained"
          href={links.demo}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            backgroundColor: color,
            color: colorDark || '#fff',
            '&:hover': {
              backgroundColor: colorDark || 'primary.dark',
            },
          }}
        >
          Open website
        </Button>
      </Stack>
    </Stack>
  );
};

export default PortfolioWorkButtons;
