import React from 'react';
import { Grid } from '@mui/material';

import useStyles from './styles';

import Welcome from './components/Welcome';

function Login() {
  const classes = useStyles();

  return (
    <Grid container className={classes.vwLogin}>
      <Grid item xs={4}>
        <Welcome />
      </Grid>
      <Grid item xs={8}>
        <span>Login</span>
      </Grid>
    </Grid>
  );
}

export default Login;
