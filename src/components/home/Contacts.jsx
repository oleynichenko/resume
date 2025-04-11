import { Stack, Typography, Box, Link } from '@mui/material';
import { Phone, Email, Language } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from './SectionTitle';
import { Link as RouterLink, useParams } from 'react-router';

const Contacts = ({ sx }) => {
  const { t } = useTranslation();
  const { lang } = useParams();

  const contacts = [
    {
      icon: (
        <Stack sx={{ bgcolor: 'primary.main', borderRadius: '50%', p: 1 }}>
          <Email fontSize="large" sx={{ color: 'white' }} />
        </Stack>
      ),
      label: t('contacts.email'),
      value: 'oleynichenkos@gmail.com',
      href: 'mailto:oleynichenkos@gmail.com?subject=Interview invitation',
    },
    {
      icon: (
        <Stack sx={{ bgcolor: 'primary.main', borderRadius: '50%', p: 1 }}>
          <Phone fontSize="large" sx={{ color: 'white' }} />
        </Stack>
      ),
      label: t('contacts.phone'),
      value: '+38 050 865 82 18',
      href: 'tel:+380508658218',
    },
    {
      icon: (
        <Stack sx={{ bgcolor: 'primary.main', borderRadius: '50%', p: 1 }}>
          <Language fontSize="large" sx={{ color: 'white' }} />
        </Stack>
      ),
      label: t('contacts.portfolio'),
      value: 'oleynichenko.github.io',
      href: `/${lang}/portfolio`,
      isRouterLink: true,
    },
  ];

  return (
    <Box sx={{ ...sx }}>
      <SectionTitle>{t('contacts.title')}</SectionTitle>
      <Stack
        sx={{
          pr: { lg: 1 },
          flexDirection: { md: 'row' },
          gap: 3,
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {contacts.map(({ icon, label, value, href, isRouterLink }) => (
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
              {isRouterLink ? (
                <Link
                  sx={{
                    color: 'inherit',
                    textDecorationColor: 'inherit',
                    '&:hover': { color: 'primary.main' },
                  }}
                  component={RouterLink}
                  variant="h5"
                  to={href}
                >
                  {value}
                </Link>
              ) : (
                <Link
                  sx={{ fontWeight: 400, '&:hover': { color: 'primary.main' } }}
                  color="inherit"
                  variant="h5"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {value}
                </Link>
              )}
              <Typography variant="body1">{label}</Typography>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Contacts;
