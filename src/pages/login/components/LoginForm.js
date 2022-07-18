import React from 'react';
import { useSelector } from 'react-redux';
import {
  Typography,
  Button,
  InputAdornment,
  IconButton,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Field, Formik } from 'formik';
import { TextField } from 'formik-mui';

import useStyles from './styles';
import getDictionary from '../helpers/functions';

import LanguageSelect from '../../../components/language';

import loginFormInitialValues from '../helpers/constants';
import MainImage from '../../../assets/images/login/main-logo.png';

function LoginForm({
  showPassword,
  loginFormValidationSchema,
  handleClickShowPassword,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const lang = useSelector((state) => state.uiSettings.lang);
  const srcLang = getDictionary(lang).loginForm;

  return (
    <Grid container direction='column' height='100%'>
      <Grid item xs={1} className={classes.languageContainer}>
        <LanguageSelect />
      </Grid>
      <Grid item xs={11} className={classes.loginFormContainer}>
        {matches && (
          <img
            className={classes.secondaryLogoImg}
            src={MainImage}
            alt='main-logo'
          />
        )}
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
                      <IconButton onClick={handleClickShowPassword} edge='end'>
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
      </Grid>
    </Grid>
  );
}

export default LoginForm;
