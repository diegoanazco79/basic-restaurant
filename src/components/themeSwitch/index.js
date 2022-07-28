import React from 'react';
import { IconButton } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

import useThemeSwitch from './hooks/useThemeSwitch';

function ThemeSwitch() {
  const { currentTheme, handleChange } = useThemeSwitch();

  return (
    <IconButton onClick={() => handleChange()}>
      {currentTheme === 'light' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon /> }
    </IconButton>
  );
}

export default ThemeSwitch;
