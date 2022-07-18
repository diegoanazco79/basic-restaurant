import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoutes({ isLogged, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        (isLogged)
          ? <Component {...props} />
          : <Redirect to='/login' />
      )}
    />
  );
}

export default PrivateRoutes;
