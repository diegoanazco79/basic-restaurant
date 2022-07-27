import React from 'react';
import { IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import useThemeSwitch from './hooks/useThemeSwitch';

function ThemeSwitch() {
  const { currentTheme, handleChange } = useThemeSwitch();

  return (
    <IconButton onClick={() => handleChange()}>
      {currentTheme === 'light' ? <LightModeIcon /> : <DarkModeIcon /> }
    </IconButton>
  );
}

export default ThemeSwitch;
