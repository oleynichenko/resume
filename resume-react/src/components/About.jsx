import { Typography, Box, Grid, Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import alexandrDs1x from '../assets/img/alexandr-ds-1x.jpg';
import alexandrDs2x from '../assets/img/alexandr-ds-2x.jpg';
import InfoItems from './InfoItems';

const About = ({ sx }) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ ...sx }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4, lg: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
              src={alexandrDs1x}
              srcSet={`${alexandrDs2x} 2x`}
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
          <Typography sx={{ mb: 0.5, textTransform: 'uppercase' }} variant="h3">
            {t('about.name')}
          </Typography>
          <Typography sx={{ mb: 1.5 }} variant="h5" color="primary">
            {t('about.position')}
          </Typography>
          {t('about.description', { returnObjects: true }).map(
            (paragraph, index) => (
              <Typography sx={{ mb: 1 }} variant="body1" key={index}>
                {paragraph}
              </Typography>
            ),
          )}
          <InfoItems sx={{ display: { xs: 'none', lg: 'flex' }, mt: 3 }} />
        </Grid>
      </Grid>
      <InfoItems
        sx={{
          display: { xs: 'flex', lg: 'none' },
          // flexDirection: { xs: 'column', md: 'row' },
          mt: 3,
        }}
      />
    </Box>
  );
};

export default About;
