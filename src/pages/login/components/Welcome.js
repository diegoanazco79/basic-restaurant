import React from 'react';
import { Container } from '@mui/material';

import useStyles from './styles';

import MainImage from '../../../assets/images/login/main-logo.png';

function Welcome() {
  const classes = useStyles();

  return (
    <Container className={classes.welcomeContainer}>
      <img className={classes.mainLogoImg} src={MainImage} alt='main-logo' />
    </Container>
  );
}

export default Welcome;
