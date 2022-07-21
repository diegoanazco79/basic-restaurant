import React from 'react';
import { Container } from '@mui/material';

import MainImage from 'assets/images/login/main-logo.png';
import useStyles from './styles';

function Welcome() {
  const classes = useStyles();

  return (
    <Container className={classes.welcomeContainer}>
      <img className={classes.mainLogoImg} src={MainImage} alt='main-logo' />
    </Container>
  );
}

export default Welcome;
