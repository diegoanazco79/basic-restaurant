import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PublicRoutes({ isLogged, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        (!isLogged)
          ? <Component {...props} />
          : <Redirect to='/dashboard' />
      )}
    />
  );
}

export default PublicRoutes;
