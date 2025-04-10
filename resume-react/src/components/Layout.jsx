import { Container, Paper, useMediaQuery, useTheme } from '@mui/material';
import LanguagePopover from './LanguagePopover';

const Layout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const elevation = isMobile ? 0 : 3;

  return (
    <Container
      sx={{
        pt: { xs: 0, md: 6 },
        pb: { xs: 0, md: 10 },
        maxWidth: { xs: '500px', md: '1180px' },
      }}
      maxWidth={false}
    >
      <Paper
        elevation={elevation}
        sx={{
          position: 'relative',
          py: { xs: 0, md: 15 },
          px: { xs: 0, md: 8 },
        }}
      >
        <LanguagePopover
          sx={{ position: 'absolute', top: '72px', right: '64px' }}
        />
        {children}
      </Paper>
    </Container>
  );
};
export { Layout };
