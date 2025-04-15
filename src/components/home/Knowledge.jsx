import { Box, Grid, Typography, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from './SectionTitle';
import { motion } from 'motion/react';

const KnowledgeTooltip = ({ title, children }) => (
  <Tooltip
    arrow
    title={title}
    slotProps={{
      tooltip: {
        sx: {
          letterSpacing: 0.75,
          fontSize: 14,
        },
      },
    }}
  >
    {children}
  </Tooltip>
);

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

const SIZE = {
  copywriting: 50,
  psychology: 38,
  gtmGa: 38,
  webdesign: 69,
  materialDesign: 44,
  wordpress: 32,
  videoEditing: 32,
  googleAds: 56,
  ai: 48,
};

const getSmallSize = (size) => {
  return size * 0.75;
};

const Knowledge = () => {
  const { t } = useTranslation();

  return (
    <Box
      onMouseEnter={(e) => {
        e.currentTarget.querySelector('.section-title').style.opacity = '1';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.querySelector('.section-title').style.opacity = '0';
      }}
    >
      <SectionTitle sx={{ mb: { xs: 3, md: 3 }, color: 'primary.main' }}>
        {t('additionalExperience.title')}
      </SectionTitle>
      <Grid container rowSpacing={2.5}>
        <Grid size={7}>
          <KnowledgeTooltip
            sx={{ letterSpacing: 0.5 }}
            arrow
            title={t('additionalExperience.details.copywriting')}
          >
            <Typography
              sx={{
                ...phraseStyles,
                fontSize: {
                  xs: getSmallSize(SIZE.copywriting),
                  sm: SIZE.copywriting,
                },
                opacity: 0.4,
                fontWeight: 400,
              }}
            >
              {t('additionalExperience.copywriting')}
            </Typography>
          </KnowledgeTooltip>
        </Grid>
        <Grid sx={{ alignSelf: 'center' }} size={5}>
          <KnowledgeTooltip
            title={t('additionalExperience.details.psychology')}
          >
            <Typography
              sx={{
                ...phraseStyles,
                fontSize: {
                  xs: getSmallSize(SIZE.psychology),
                  sm: SIZE.psychology,
                },
                opacity: 0.6,
                textAlign: 'right',
              }}
            >
              {t('additionalExperience.psychology')}
            </Typography>
          </KnowledgeTooltip>
        </Grid>

        <Grid size={4}>
          <KnowledgeTooltip title={t('additionalExperience.details.gtmGa')}>
            <Typography
              sx={{
                ...phraseStyles,
                fontSize: {
                  xs: getSmallSize(SIZE.gtmGa),
                  sm: SIZE.gtmGa,
                },
                opacity: 0.4,
                pt: 1,
                fontWeight: 400,
              }}
            >
              {t('additionalExperience.gtmGa')}
            </Typography>
          </KnowledgeTooltip>
        </Grid>
        <Grid size={8}>
          <KnowledgeTooltip title={t('additionalExperience.details.webdesign')}>
            <Typography
              sx={{
                ...phraseStyles,
                fontSize: {
                  xs: getSmallSize(SIZE.webdesign),
                  sm: SIZE.webdesign,
                },
                letterSpacing: 2,
                opacity: 0.8,
                textAlign: 'right',
              }}
            >
              {t('additionalExperience.webdesign')}
            </Typography>
          </KnowledgeTooltip>
        </Grid>

        <Grid size={8}>
          <KnowledgeTooltip
            arrow
            title={t('additionalExperience.details.materialDesign')}
          >
            <Typography
              sx={{
                ...phraseStyles,
                fontSize: {
                  xs: getSmallSize(SIZE.materialDesign),
                  sm: SIZE.materialDesign,
                },
                opacity: 0.5,
              }}
            >
              {t('additionalExperience.materialDesign')}
            </Typography>
          </KnowledgeTooltip>
        </Grid>
        <Grid sx={{ alignSelf: 'center' }} size={4}>
          <KnowledgeTooltip title={t('additionalExperience.details.wordpress')}>
            <Typography
              sx={{
                ...phraseStyles,
                fontSize: {
                  xs: getSmallSize(SIZE.wordpress),
                  sm: SIZE.wordpress,
                },
                opacity: 0.3,
                textAlign: 'right',
              }}
            >
              {t('additionalExperience.wordpress')}
            </Typography>
          </KnowledgeTooltip>
        </Grid>

        <Grid sx={{ alignSelf: 'center' }} size={5}>
          <KnowledgeTooltip
            title={t('additionalExperience.details.videoEditing')}
          >
            <Typography
              sx={{
                ...phraseStyles,
                fontSize: {
                  xs: getSmallSize(SIZE.videoEditing),
                  sm: SIZE.videoEditing,
                },
                opacity: 0.5,
              }}
            >
              {t('additionalExperience.videoEditing')}
            </Typography>
          </KnowledgeTooltip>
        </Grid>
        <Grid sx={{ alignSelf: 'center' }} size={7}>
          <KnowledgeTooltip title={t('additionalExperience.details.googleAds')}>
            <Typography
              sx={{
                ...phraseStyles,
                fontSize: {
                  xs: getSmallSize(SIZE.googleAds),
                  sm: SIZE.googleAds,
                },
                opacity: 0.7,
                textAlign: 'right',
                fontWeight: 400,
              }}
            >
              {t('additionalExperience.googleAds')}
            </Typography>
          </KnowledgeTooltip>
        </Grid>

        <Grid size={12}>
          <KnowledgeTooltip title={t('additionalExperience.details.ai')}>
            <Typography
              sx={{
                ...phraseStyles,
                fontSize: {
                  xs: getSmallSize(SIZE.ai),
                  sm: SIZE.ai,
                },
                textAlign: 'center',
                opacity: 0.8,
              }}
            >
              {t('additionalExperience.ai')}
            </Typography>
          </KnowledgeTooltip>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Knowledge;
