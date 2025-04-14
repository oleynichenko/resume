import { Typography, Box, Grid, Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import alexandr from '../../assets/img/alexandr.png';
import InfoItems from './InfoItems';
import { motion } from 'motion/react';
import { varFade } from '../animate/variants/fade';

const About = ({ sx }) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ ...sx }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 4, lg: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
              src={alexandr}
              alt={t('about.name')}
              sx={{
                width: 1,
                height: 1,
                objectFit: 'contain',
                borderRadius: 1,
              }}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 8, lg: 9 }}>
          <Typography
            sx={{ mb: 0.5, textTransform: 'uppercase', lineHeight: 1 }}
            variant="h3"
            component={motion.h3}
            variants={varFade('inUp', { distance: 48 })}
          >
            {t('about.name')}
          </Typography>
          <Typography
            sx={{ mb: 1.5 }}
            variant="h5"
            color="primary"
            component={motion.h5}
            variants={varFade('inUp', { distance: 24 })}
          >
            {t('about.position')}
          </Typography>
          {t('about.description', { returnObjects: true }).map(
            (paragraph, index) => (
              <Typography
                sx={{
                  mb: 1.5,
                  textAlign: { xs: 'justify', md: 'left' },
                }}
                variant="body1"
                key={index}
                component={motion.p}
                variants={varFade('inUp', { distance: 24 })}
              >
                {paragraph}
              </Typography>
            ),
          )}
          <InfoItems sx={{ display: { xs: 'none', lg: 'flex' }, mt: 2.5 }} />
        </Grid>
      </Grid>
      <InfoItems
        sx={{
          display: { xs: 'flex', lg: 'none' },
          mt: 2,
        }}
      />
    </Box>
  );
};

export default About;
