import React from 'react';
import { useSelector } from 'react-redux';
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
import getDictionary from '../helpers/functions';

import loginFormInitialValues from '../helpers/constants';
import LanguageSelect from '../../../components/language';

function LoginForm({
  showPassword,
  loginFormValidationSchema,
  handleClickShowPassword,
}) {
  const classes = useStyles();
  const lang = useSelector((state) => state.uiSettings.lang);
  const srcLang = getDictionary(lang).loginForm;

  return (
    <>
      <Container className={classes.languageContainer}>
        <LanguageSelect />
      </Container>
      <Container className={classes.loginFormContainer}>
        <Typography variant='h1'>{srcLang.labels.title}</Typography>
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
                label={srcLang.labels.emailInput}
                size='small'
                fullWidth
                name='email'
                component={TextField}
              />
              <Field
                disabled={isSubmitting}
                label={srcLang.labels.passwordInput}
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
                {srcLang.buttons.logIn}
              </Button>
            </form>
          )}
        </Formik>
      </Container>
    </>
  );
}

export default LoginForm;
