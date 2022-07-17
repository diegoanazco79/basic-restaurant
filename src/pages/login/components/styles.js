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
}));
