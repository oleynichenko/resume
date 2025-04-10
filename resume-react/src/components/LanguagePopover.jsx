import { useState } from 'react';
import { Button, MenuItem, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router';
import { LANGS } from '../locales/i18n';
import MenuPopover from './MenuPopover';

const LanguagePopover = ({ color, sx }) => {
  const {
    i18n: { language },
  } = useTranslation();
  const [open, setOpen] = useState(null);
  const currentLang = LANGS.find((lang) => lang.value === language) || LANGS[0];
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLanguageChange = (newLang) => {
    const path = location.pathname.split('/').slice(2).join('/');
    navigate(`/${newLang}${path ? `/${path}` : ''}`);
    handleClose();
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        size="small"
        sx={{
          color,
          ...sx,
        }}
      >
        {currentLang.label}
      </Button>
      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          mt: 1.5,
          ml: 0.75,
          width: 140,
          '& .MuiMenuItem-root': {
            px: 1,
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <Stack sx={{ p: 1 }}>
          {LANGS.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === currentLang.value}
              onClick={() => handleLanguageChange(option.value)}
            >
              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </MenuPopover>
    </>
  );
};

export default LanguagePopover;
