import React from 'react';
import { Grid, useMediaQuery, useTheme } from '@mui/material';

import useLogin from './hooks/useLogin';

import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';

function Login() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const {
    showPassword, loginFormValidationSchema, loginSign, loginError,
    handleClickShowPassword, submitLoginForm,
  } = useLogin();

  /* Component's props */
  const loginFormProps = {
    showPassword,
    loginFormValidationSchema,
    loginSign,
    loginError,
    handleClickShowPassword,
    submitLoginForm,
  };

  return (
    <Grid container height='100vh' bgcolor={theme.palette.light.main}>
      {!matches && (
        <Grid item xs={4}>
          <Welcome />
        </Grid>
      )}
      <Grid item xs={!matches ? 8 : 12}>
        <LoginForm {...loginFormProps} />
      </Grid>
    </Grid>
  );
}

export default Login;
