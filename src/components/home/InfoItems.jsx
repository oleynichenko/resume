import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { varFade } from '../animate/variants/fade';
import { motion } from 'motion/react';

const InfoItems = ({ sx }) => {
  const { t } = useTranslation();

  const infoItems = [
    'position',
    'experience',
    'languages',
    'location',
    'availability',
  ];

  return (
    <Stack
      sx={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        pr: 2,
        flexWrap: 'wrap',
        rowGap: 2,
        columnGap: { xs: 6, md: 4 },
        ...sx,
      }}
      component={motion.div}
      variants={varFade('inUp', { distance: 24 })}
    >
      {infoItems.map((item) => (
        <Stack key={item}>
          <Typography
            sx={{ textTransform: 'uppercase', lineHeight: 1 }}
            variant="h6"
          >
            {t(`about.info.${item}.value`)}
          </Typography>
          <Typography variant="body1">{t(`about.info.${item}.key`)}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default InfoItems;
