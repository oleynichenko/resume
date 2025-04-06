import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const InfoItems = ({ sx }) => {
  const { t } = useTranslation();

  const infoItems = ['position', 'languages', 'location', 'availability'];

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
