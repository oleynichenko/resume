import { useState } from 'react';
import { Button, MenuItem, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LANGS } from '../locales/i18n';
import MenuPopover from './MenuPopover';

const LanguagePopover = ({ color, sx }) => {
  const {
    i18n: { language, changeLanguage },
  } = useTranslation();
  const [open, setOpen] = useState(null);
  const currentLang = LANGS.find((lang) => lang.value === language);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
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
              onClick={() => {
                changeLanguage(option.value);
                handleClose();
              }}
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
