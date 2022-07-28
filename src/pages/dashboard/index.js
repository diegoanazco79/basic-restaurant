import React from 'react';
import {
  Box, Button, Typography, useTheme,
} from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ThemeSwitch from 'components/themeSwitch';

import getCurrentPallete from 'helpers/functions/themeConfig';
import { logoutSession } from 'store/slices/auth';

function Dashboard() {
  const history = useHistory();
  const theme = useTheme();
  const currentTheme = useSelector((state) => state.uiSettings.theme);
  const mainColor = getCurrentPallete(theme, currentTheme).main;
  const dispatch = useDispatch();
  const setAuthToken = (token) => dispatch(logoutSession(token));

  return (
    <Box height='100vh' bgcolor={mainColor}>
      <Button
        onClick={() => {
          history.push('/login');
          setAuthToken(null);
        }}
      >
        Logout
      </Button>
      <ThemeSwitch />
      <Typography paragraph variant='headerLarge'>
        Header Large
      </Typography>
      <Typography paragraph variant='header'>
        Header
      </Typography>
      <Typography paragraph variant='headerSmall'>
        Header Small
      </Typography>
      <Typography paragraph variant='title'>
        Title
      </Typography>
      <Typography paragraph variant='default'>
        Default
      </Typography>
      <Typography paragraph variant='caption'>
        Caption
      </Typography>
      <Button variant='primary'>
        Primary
      </Button>
      <Button variant='secondary'>
        Secondary
      </Button>
    </Box>
  );
}

export default Dashboard;
