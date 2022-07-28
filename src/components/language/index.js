import React from 'react';
import { Button, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

import useSelectLanguage from './hooks/useSelectLanguage';

function LanguageSelect() {
  const { language, handleChange } = useSelectLanguage();

  return (
    <Button
      onClick={() => handleChange()}
      sx={{ backgroundColor: 'transparent' }}
      variant='secondary'
      startIcon={<LanguageIcon />}
    >
      <Typography variant='caption'>
        {language === 'es' ? 'ES' : 'EN'}
      </Typography>
    </Button>
  );
}

export default LanguageSelect;
