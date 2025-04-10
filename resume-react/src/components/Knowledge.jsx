import { Box, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from './SectionTitle';

const Knowledge = () => {
  const { t } = useTranslation();

  const knowledge = [
    'Neuromarketing',
    'Adwords',
    'SEO',
    'Webdesign',
    'Material Design',
    'UX/UI',
    'Copywriting',
    'Psychology',
    'CPA-Marketing',
  ];

  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 20 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.5, delay: 0.5 }}
    // >
    // <Grid item xs={12} md={6}>
    //   <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
    //     <Typography variant="h2" gutterBottom>
    //       {t('skills.goodKnowledge')}
    //     </Typography>
    <Box>
      <SectionTitle sx={{ mb: 2.5 }}>
        {t('additionalExperience.title')}
      </SectionTitle>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {knowledge.map((item) => (
          <Chip key={item} label={item} color="primary" variant="outlined" />
        ))}
      </Box>
    </Box>
  );
};

export default Knowledge;
