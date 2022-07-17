import React from 'react';
import {
  Container,
  Typography,
  Button,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Field, Formik } from 'formik';
import { TextField } from 'formik-mui';

import useStyles from './styles';

import loginFormInitialValues from '../helpers/constants';

function LoginForm({
  showPassword,
  loginFormValidationSchema,
  handleClickShowPassword,
}) {
  const classes = useStyles();

  return (
    <Container className={classes.loginFormContainer}>
      <Typography variant='h1'>Iniciar Sesión</Typography>
      <Formik
        initialValues={loginFormInitialValues}
        validationSchema={loginFormValidationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          resetForm({ values: loginFormInitialValues });
        }}
      >
        {({ isSubmitting, handleSubmit }) => (
          <form className={classes.loginForm} onSubmit={handleSubmit}>
            <Field
              disabled={isSubmitting}
              label='E-mail'
              size='small'
              fullWidth
              name='email'
              component={TextField}
            />
            <Field
              disabled={isSubmitting}
              label='Password'
              size='small'
              fullWidth
              name='password'
              type={showPassword ? 'text' : 'password'}
              component={TextField}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      onClick={handleClickShowPassword}
                      edge='end'
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button type='submit' disabled={isSubmitting} variant='contained'>
              Log in
            </Button>
          </form>
        )}
      </Formik>
    </Container>
  );
}

export default LoginForm;
