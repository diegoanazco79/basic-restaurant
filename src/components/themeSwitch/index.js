import React from 'react';
import { Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

import getDictionary from 'helpers/functions/dictionaryConfig';
import languageEn from './helpers/dictionary/languageEn';
import languageEs from './helpers/dictionary/languageEs';

import useThemeSwitch from './hooks/useThemeSwitch';

function ThemeSwitch() {
  const lang = useSelector((state) => state.uiSettings.lang);
  const srcLang = getDictionary(lang, languageEn, languageEs);

  const { currentTheme, handleChange } = useThemeSwitch();

  return (
    <Button
      onClick={() => handleChange()}
      variant='secondary'
      sx={{ backgroundColor: 'transparent' }}
      startIcon={
        currentTheme === 'light' ? (
          <LightModeOutlinedIcon />
        ) : (
          <DarkModeOutlinedIcon />
        )
      }
    >
      <Typography variant='caption'>
        {currentTheme === 'light' ? srcLang.labels.light : srcLang.labels.dark}
      </Typography>
    </Button>
  );
}

export default ThemeSwitch;
