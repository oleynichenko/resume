import { Container, Paper, useMediaQuery, useTheme } from '@mui/material';

const Layout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const elevation = isMobile ? 0 : 3;

  return (
    <Container
      sx={{ my: { xs: 0, md: 6 }, maxWidth: '1180px' }}
      maxWidth={false}
    >
      <Paper
        elevation={elevation}
        sx={{
          py: { xs: 0, md: 15 },
          px: { xs: 0, md: 8 },
        }}
      >
        {children}
      </Paper>
    </Container>
  );
};
export { Layout };
