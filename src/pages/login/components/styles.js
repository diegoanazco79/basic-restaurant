import { createStyles, makeStyles } from '@mui/styles';

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
    position: 'absolute',
    display: 'flex !important',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: '0.625rem',
  },
  loginForm: {
    display: 'flex !important',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1.875rem',
    width: '25rem',
    '& .MuiTextField-root': {
      marginBottom: '1.25rem',
    },
  },
}));
