import { Typography, Box, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LensIcon from '@mui/icons-material/Lens';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { SectionTitle } from './SectionTitle';

const Skills = ({ sx }) => {
  const { t } = useTranslation();

  const skills = [
    { name: 'React + Redux', level: 9 },
    { name: 'React Native', level: 9 },
    { name: 'Angular + NgRx', level: 9 },
    { name: 'Node JS', level: 7 },
    { name: 'MongoDB', level: 7 },
    { name: 'Postgres', level: 10 },
    { name: 'PHP + SQL', level: 4 },
    { name: 'PS + AdobeXD', level: 8 },
    { name: 'UX/UI', level: 8 },
  ];

  const SkillBar = ({ level }) => {
    const filled = Array(level).fill(<LensIcon color="primary" />);
    const empty = Array(12 - level).fill(
      <PanoramaFishEyeIcon color="text.secondary" />,
    );

    return (
      <Box sx={{ display: 'flex', gap: 0.75, alignItems: 'center' }}>
        {filled.map((dot) => dot)}
        {empty.map((dot) => dot)}
      </Box>
    );
  };

  return (
    <Box sx={sx}>
      <SectionTitle sx={{ mb: 2.5 }}>{t('skills.title')}</SectionTitle>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {skills.map(({ name, level }) => (
          <Grid container key={name} spacing={2} alignItems="center">
            <Grid item size={3}>
              <Typography variant="body1">{name}</Typography>
            </Grid>
            <Grid item size={9}>
              <SkillBar level={level} />
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
