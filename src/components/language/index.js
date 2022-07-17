import React from 'react';
import { MenuItem, Select } from '@mui/material';

import useSelectLanguage from './hooks/useSelectLanguage';
import useStyles from './style';

function LanguageSelect() {
  const classes = useStyles();

  const { language, handleChange } = useSelectLanguage();

  return (
    <Select
      defaultValue='es'
      value={language}
      className={classes.selectLanguage}
      onChange={handleChange}
    >
      <MenuItem value='es'>ES</MenuItem>
      <MenuItem value='en'>EN</MenuItem>
    </Select>
  );
}

export default LanguageSelect;
