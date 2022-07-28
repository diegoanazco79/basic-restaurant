import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';

import PermissionWrapper from 'auth/PermissionWrapper';
import Header from './components/header';
import Menu from './components/menu';

import useLayoutApp from './hooks/useLayoutApp';

import routes from '../routes';

function LayoutApp() {
  const {
    openMenu,
    Main,
    DrawerHeader,
    mainColor,
    handleDrawerOpen,
    handleDrawerClose,
  } = useLayoutApp();

  return (
    <Box sx={{ display: 'flex' }} bgcolor={mainColor}>
      <CssBaseline />
      <Header open={openMenu} handleDrawerOpen={handleDrawerOpen} />
      <Menu
        open={openMenu}
        handleDrawerClose={handleDrawerClose}
        DrawerHeader={DrawerHeader}
      />
      <Main open={openMenu}>
        <DrawerHeader />
        <Switch>
          {routes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              name={route.name}
              render={(props) => (
                <PermissionWrapper
                  route={route.name}
                  permits={route.permits}
                  component={route.component}
                  {...props}
                />
              )}
            />
          ))}
          <Redirect from='*' to='/dashboard' />
        </Switch>
      </Main>
    </Box>
  );
}

export default LayoutApp;
