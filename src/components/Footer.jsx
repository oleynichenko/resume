import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import { UPDATE_DATE } from '../constants';

const Footer = ({ sx }) => {
  const { t, i18n } = useTranslation();

  return (
    <Box sx={sx}>
      <Typography
        sx={{ textAlign: { xs: 'center' } }}
        variant="body2"
        color="text.secondary"
      >
        {t('lastUpdated')}:{' '}
        {dayjs(UPDATE_DATE).locale(i18n.language).format('MMMM YYYY')}
      </Typography>
    </Box>
  );
};

export default Footer;
