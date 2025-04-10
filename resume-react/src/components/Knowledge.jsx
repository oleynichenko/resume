import { Box, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from './SectionTitle';
// import { KNOWLEDGE } from '../constants';
import { motion } from 'framer-motion';

const phraseStyles = {
  fontWeight: 700,
  lineHeight: 1,
  letterSpacing: 1,
  textTransform: 'uppercase',
  transition: 'color 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    color: 'primary.main',
  },
};

const Knowledge = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <SectionTitle sx={{ mb: { xs: 3, md: 3 }, color: 'primary.main' }}>
          {t('additionalExperience.title')}
        </SectionTitle>
      </motion.div>
      <Grid container rowSpacing={2.5}>
        <Grid size={7}>
          <Typography
            sx={{
              ...phraseStyles,
              fontSize: { xs: '50px' },
              opacity: 0.4,
              fontWeight: 400,
            }}
          >
            {t('additionalExperience.copywriting')}
          </Typography>
        </Grid>
        <Grid sx={{ alignSelf: 'center' }} size={5}>
          <Typography
            sx={{
              ...phraseStyles,
              fontSize: { xs: '38px' },
              opacity: 0.6,
              textAlign: 'right',
            }}
          >
            {t('additionalExperience.psychology')}
          </Typography>
        </Grid>

        <Grid size={4}>
          <Typography
            sx={{
              ...phraseStyles,
              fontSize: { xs: '38px' },
              opacity: 0.4,
              pt: 1,
              fontWeight: 400,
            }}
          >
            {t('additionalExperience.gtmGa')}
          </Typography>
        </Grid>
        <Grid size={8}>
          <Typography
            sx={{
              ...phraseStyles,
              fontSize: { xs: '70px' },
              letterSpacing: 2,
              opacity: 0.8,
              textAlign: 'right',
            }}
          >
            {t('additionalExperience.webdesign')}
          </Typography>
        </Grid>

        <Grid size={8}>
          <Typography
            sx={{
              ...phraseStyles,
              fontSize: { xs: '45px' },
              opacity: 0.4,
            }}
          >
            {t('additionalExperience.materialDesign')}
          </Typography>
        </Grid>
        <Grid sx={{ alignSelf: 'center' }} size={4}>
          <Typography
            sx={{
              ...phraseStyles,
              fontSize: { xs: '30px' },
              opacity: 0.4,
              textAlign: 'right',
            }}
          >
            {t('additionalExperience.wordpress')}
          </Typography>
        </Grid>

        <Grid sx={{ alignSelf: 'center' }} size={5}>
          <Typography
            sx={{
              ...phraseStyles,
              fontSize: { xs: '32px' },
              opacity: 0.4,
            }}
          >
            {t('additionalExperience.videoEditing')}
          </Typography>
        </Grid>
        <Grid sx={{ alignSelf: 'center' }} size={7}>
          <Typography
            sx={{
              ...phraseStyles,
              fontSize: { xs: '56px' },
              opacity: 0.7,
              textAlign: 'right',
              fontWeight: 400,
            }}
          >
            {t('additionalExperience.googleAds')}
          </Typography>
        </Grid>

        <Grid size={12}>
          <Typography
            sx={{
              ...phraseStyles,
              fontSize: { xs: '48px' },
              opacity: 0.7,
            }}
          >
            {t('additionalExperience.ai')}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Knowledge;
