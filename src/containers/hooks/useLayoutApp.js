import { useState } from 'react';
import { useSelector } from 'react-redux';
import { styled, useTheme } from '@mui/material';

import getCurrentPallete from 'helpers/functions/themeConfig';

const useLayoutApp = () => {
  const customTheme = useTheme();
  const currentTheme = useSelector((state) => state.uiSettings.theme);
  const mainColor = getCurrentPallete(customTheme, currentTheme).main;

  const [openMenu, setOpenMenu] = useState(true);

  /* A Main styled component. */
  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      // padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: '-15rem',
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );

  /* A Header styled component. */
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  /**
   * When the user clicks on the hamburger menu, the drawer opens
   */
  const handleDrawerOpen = () => {
    setOpenMenu(true);
  };

  /**
   * It closes the menu when the user clicks on the menu icon.
   */
  const handleDrawerClose = () => {
    setOpenMenu(false);
  };

  return {
    /* States */
    openMenu,
    mainColor,

    /* Components */
    Main,
    DrawerHeader,

    /* Functions */
    handleDrawerOpen,
    handleDrawerClose,
  };
};

export default useLayoutApp;
