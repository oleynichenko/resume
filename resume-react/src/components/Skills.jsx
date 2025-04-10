import { Typography, Box, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LensIcon from '@mui/icons-material/Lens';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { SectionTitle } from './SectionTitle';
import { SKILLS } from '../constants';

const Skills = ({ sx }) => {
  const { t } = useTranslation();

  const SkillBar = ({ level }) => {
    const filled = Array(level).fill(
      <LensIcon color="primary" sx={{ fontSize: { xs: 16, sm: 20 } }} />,
    );

    const empty = Array(12 - level).fill(
      <PanoramaFishEyeIcon
        color="text.secondary"
        sx={{ fontSize: { xs: 16, sm: 20 } }}
      />,
    );

    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {filled.map((dot) => dot)}
        {empty.map((dot) => dot)}
      </Box>
    );
  };

  return (
    <Box sx={sx}>
      <SectionTitle sx={{ mb: { xs: 3, md: 4 } }}>
        {t('skills.title')}
      </SectionTitle>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 1.5, md: 2 },
        }}
      >
        {SKILLS.map(({ name, level }) => (
          <Grid container key={name} spacing={2} alignItems="center">
            <Grid item size={{ xs: 4, md: 3 }}>
              <Typography sx={{ lineHeight: 1.2 }} variant="body1">
                {name}
              </Typography>
            </Grid>
            <Grid item size={{ xs: 8, md: 9 }}>
              <SkillBar level={level} />
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
