import { createStyles, makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material';

const theme = createTheme();

export default makeStyles(() => createStyles({
  welcomeContainer: {
    display: 'flex !important',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    boxShadow: '0.625rem 0 0.313rem -0.125rem #D1D9E6',
  },
  loginFormContainer: {
    display: 'flex !important',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  languageContainer: {
    display: 'flex !important',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: '0.625rem',
    marginRight: '1.25rem !important',
  },
  loginForm: {
    display: 'flex !important',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1.875rem',
    width: '25rem',
    [theme.breakpoints.down('md')]: {
      width: '20rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '15rem',
    },
    '& .MuiTextField-root': {
      marginBottom: '1.25rem',
    },
  },
  googleForm: {
    marginTop: '0.938rem',
    width: '100%',
    justifyContent: 'center',
    '& #signInDiv': {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '0.625rem',
    },
  },
  mainLogoImg: {
    width: '31.25rem',
    height: '31.25rem',
    [theme.breakpoints.down('lg')]: {
      width: '21.875rem',
      height: '21.875rem',
    },
  },
  secondaryLogoImg: {
    width: '8.25rem',
    height: '8.25rem',
  },
}));
