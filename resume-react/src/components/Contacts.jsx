import { Stack, Typography, Box, Link } from '@mui/material';
import { Phone, Email, Language } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Contacts = ({ sx }) => {
  const { t } = useTranslation();

  const contacts = [
    {
      icon: <Email fontSize="large" color="primary" />,
      label: t('contacts.email'),
      value: 'oleynichenkos@gmail.com',
      href: 'mailto:oleynichenkos@gmail.com?subject=Interview invitation',
    },
    {
      icon: <Phone fontSize="large" color="primary" />,
      label: t('contacts.phone'),
      value: '+38 050 865 82 18',
      href: 'tel:+380508658218',
    },
    {
      icon: <Language fontSize="large" color="primary" />,
      label: t('contacts.portfolio'),
      value: 'oleynichenko.github.io',
      href: 'https://oleynichenko.github.io/',
    },
  ];

  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 20 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.5, delay: 0.2 }}
    // >
    <Box sx={{ ...sx }}>
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          textTransform: 'uppercase',
          borderBottom: '3px solid',
        }}
      >
        {t('contacts.title')}
      </Typography>
      <Stack
        sx={{
          pr: { lg: 1 },
          flexDirection: { md: 'row' },
          gap: 3,
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {contacts.map(({ icon, label, value, href }) => (
          <Box
            key={label}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {icon}
            <Stack>
              <Link
                sx={{ fontWeight: 400 }}
                color="inherit"
                variant="h5"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {value}
              </Link>
              <Typography variant="body1">{label}</Typography>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Contacts;
