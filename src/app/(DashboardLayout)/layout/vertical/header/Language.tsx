import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import { useState } from 'react';

import { setLanguage } from '@/store/customizer/CustomizerSlice';
import { useDispatch, useSelector } from '@/store/hooks';
import type { AppState } from '@/store/store';
import i18n from '@/utils/i18n';

const Languages = [
  {
    flagname: 'English (US)',
    icon: '/images/flag/icon-flag-en.svg',
    value: 'en',
  },
  {
    flagname: 'Português (Brazil)',
    icon: '/images/flag/icon-flag-br.svg',
    value: 'br',
  },
];

const Language = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const customizer = useSelector((state: AppState) => state.customizer);
  const currentLang =
    Languages.find((_lang) => _lang.value === customizer.isLanguage) ||
    Languages[1];

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang: string) => {
    dispatch(setLanguage(lang));
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <Button
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        color="inherit"
        onClick={handleClick}
      >
        <Avatar
          src={currentLang?.icon}
          alt={currentLang?.value}
          sx={{ width: 25, height: 25 }}
        />
      </Button>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiMenu-paper': {
            marginTop: '12px',
            width: '200px',
          },
        }}
      >
        {Languages.map((option) => (
          <MenuItem
            key={`${option.flagname}`}
            sx={{ py: 2, px: 3 }}
            onClick={() => handleLanguageChange(option.value)}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                src={option.icon}
                alt={option.icon}
                sx={{ width: 20, height: 20 }}
              />
              <Typography> {option.flagname}</Typography>
            </Stack>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Language;
