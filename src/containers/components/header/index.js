import React from 'react';
import { Grid, IconButton, Toolbar } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import ThemeSwitch from 'components/themeSwitch';
import LanguageSelect from 'components/language';

import useHeader from './hooks/useHeader';

function Header({ open, handleDrawerOpen }) {
  const { AppBar } = useHeader();
  return (
    <AppBar position='fixed' open={open}>
      <Toolbar>
        <Grid container>
          <Grid item xs={1}>
            <IconButton
              onClick={handleDrawerOpen}
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item xs={11} display='flex' justifyContent='flex-end'>
            <ThemeSwitch />
            <LanguageSelect />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
