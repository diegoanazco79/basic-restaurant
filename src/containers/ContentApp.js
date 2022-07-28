import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Box, CircularProgress, Toolbar } from '@mui/material';

import PermissionWrapper from '../auth/PermissionWrapper';
import routes from '../routes';

function ContentApp() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Box component='main' sx={{ flexGrow: 1 }}>
        <Toolbar />
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
      </Box>
    </Suspense>
  );
}

export default React.memo(ContentApp);
