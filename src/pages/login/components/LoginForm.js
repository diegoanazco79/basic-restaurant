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
  Divider,
  Box,
  FormHelperText,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Field, Formik } from 'formik';
import { TextField } from 'formik-mui';

import MainImage from 'assets/images/login/main-logo.png';

import LanguageSelect from 'components/language';

import loginFormInitialValues from '../helpers/constants';
import getDictionary from '../helpers/functions';
import useStyles from './styles';

function LoginForm({
  showPassword,
  loginFormValidationSchema,
  loginSign,
  loginError,
  handleClickShowPassword,
  submitLoginForm,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const lang = useSelector((state) => state.uiSettings.lang);
  const srcLang = getDictionary(lang).loginForm;
  const loadingLogin = loginSign.isLoading;

  return (
    <Grid container direction='column' height='100%'>
      <Grid item xs={1} className={classes.languageContainer}>
        <LanguageSelect />
      </Grid>
      <Grid item xs={9} className={classes.loginFormContainer}>
        <Box className={classes.loginForm}>
          <Box flexDirection='column' alignItems='center' display='flex'>
            {matches && (
              <img
                className={classes.secondaryLogoImg}
                src={MainImage}
                alt='main-logo'
              />
            )}
            <Typography align='center' variant='headerLarge'>{srcLang.labels.title}</Typography>
            <Formik
              initialValues={loginFormInitialValues}
              validationSchema={loginFormValidationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                submitLoginForm(values.email, values.password);
                setSubmitting(false);
                resetForm({ values: loginFormInitialValues });
              }}
            >
              {({ handleSubmit }) => (
                <form className={classes.loginForm} onSubmit={handleSubmit}>
                  <Field
                    disabled={loadingLogin}
                    label={srcLang.labels.emailInput}
                    size='small'
                    fullWidth
                    name='email'
                    component={TextField}
                  />
                  <Field
                    className={classes.passwordInput}
                    disabled={loadingLogin}
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
                  {loginError && (
                    <FormHelperText>
                      {srcLang.warnings.loginError}
                    </FormHelperText>
                  )}
                  <Button type='submit' disabled={loadingLogin} variant='primary'>
                    {srcLang.buttons.logIn}
                  </Button>
                </form>
              )}
            </Formik>
          </Box>
          <Box className={classes.googleForm}>
            <Divider>
              <Typography variant='body2'>{srcLang.labels.or}</Typography>
            </Divider>
            <div id='signInDiv' />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default LoginForm;
