import React, { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';

import { CircularProgress } from '@mui/material';

/* Private (Routes and Pages) */
const PrivateRoutes = lazy(() => import('./routes/helpers/PrivateRoutes'));
const LayoutApp = lazy(() => import('./containers/LayoutApp'));

/* Public (Routes and Pages) */
const PublicRoute = lazy(() => import('./routes/helpers/PublicRoutes'));
const Login = lazy(() => import('./pages/login'));

const isLogged = false; // TO DO: Integration with backend

function App() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Switch>
        <PublicRoute isLogged={isLogged} exact path='/login' name='Login Page' component={Login} />
        <PrivateRoutes isLogged={isLogged} path='/' component={LayoutApp} />
      </Switch>
    </Suspense>
  );
}

export default App;
