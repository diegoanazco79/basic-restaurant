import { AppBar as MuiAppBar, styled } from '@mui/material';

const useHeader = () => {
  /* A Main styled component. */
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: 'calc(100% - 15rem)',
      marginLeft: '15rem',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  return {
    /* Components */
    AppBar,
  };
};

export default useHeader;
