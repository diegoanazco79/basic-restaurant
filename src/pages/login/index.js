import React from 'react';
import { Grid } from '@mui/material';

import useLogin from './hooks/useLogin';
import useStyles from './styles';

import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';

function Login() {
  const classes = useStyles();

  const {
    showPassword, loginFormValidationSchema,
    handleClickShowPassword,
  } = useLogin();

  /* Component's props */
  const loginFormProps = {
    showPassword,
    loginFormValidationSchema,
    handleClickShowPassword,
  };

  return (
    <Grid container className={classes.vwLogin}>
      <Grid item xs={4}>
        <Welcome />
      </Grid>
      <Grid item xs={8}>
        <LoginForm {...loginFormProps} />
      </Grid>
    </Grid>
  );
}

export default Login;
