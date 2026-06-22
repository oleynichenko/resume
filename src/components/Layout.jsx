import {
  Container,
  Paper,
  useMediaQuery,
  useTheme,
  Button,
  Stack,
} from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { LanguagePopover } from './LanguagePopover';
import { ParticlesComponent } from './Particles';
import { motion } from 'motion/react';
import { MotionViewport } from './animate/motion-viewport';
import { RESUME_PDF_URL } from '../constants';

const Layout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const elevation = isMobile ? 0 : 3;
  const { lang } = useParams();
  const { t } = useTranslation();

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
          pt: { xs: 5, md: 15 },
          pb: { xs: 0, md: 6 },
          px: { xs: 0, md: 8 },
        }}
      >
        <MotionViewport disabled={isMobile}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Stack
              direction="row"
              sx={{
                position: 'absolute',
                top: isMobile ? '0px' : '56px',
                right: isMobile ? '0px' : '64px',
                zIndex: 1,
              }}
            >
              <Button
                component="a"
                href={RESUME_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{ px: 1.5 }}
              >
                {t('layout.resumePdf')}
              </Button>
              <Button
                component={RouterLink}
                to={`/${lang}/portfolio`}
                size="small"
                sx={{ px: 1.5 }}
              >
                {t('layout.portfolio')}
              </Button>
              <LanguagePopover />
            </Stack>
            {children}
          </motion.div>
        </MotionViewport>
      </Paper>
    </Container>
  );
};
export { Layout };
