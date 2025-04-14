import { Container, Paper, useMediaQuery, useTheme } from '@mui/material';
import { LanguagePopover } from './LanguagePopover';
import { ParticlesComponent } from './Particles';
import { motion } from 'motion/react';
import { MotionViewport } from './animate/motion-viewport';

const Layout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const elevation = isMobile ? 0 : 3;

  return (
    <Container
      sx={{
        pt: { xs: 2, md: 6 },
        pb: { xs: 3, md: 10 },
        maxWidth: { xs: '520px', md: '1180px' },
      }}
      maxWidth={false}
    >
      <ParticlesComponent isMobile={isMobile} />
      <Paper
        elevation={elevation}
        sx={{
          position: 'relative',
          backgroundColor: 'white',
          pt: { xs: 0, md: 15 },
          pb: { xs: 0, md: 6 },
          px: { xs: 0, md: 8 },
        }}
      >
        <MotionViewport>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <LanguagePopover
              sx={{
                position: 'absolute',
                top: isMobile ? '16px' : '72px',
                right: isMobile ? '16px' : '64px',
                zIndex: 1,
              }}
            />
            {children}
          </motion.div>
        </MotionViewport>
      </Paper>
    </Container>
  );
};
export { Layout };
