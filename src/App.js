import React, { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { CircularProgress, ThemeProvider } from '@mui/material';

import darkTheme from 'assets/darkTheme';
import lightTheme from 'assets/lightTheme';

/* Private (Routes and Pages) */
const PrivateRoutes = lazy(() => import('./routes/helpers/PrivateRoutes'));
const LayoutApp = lazy(() => import('./containers/LayoutApp'));

/* Public (Routes and Pages) */
const PublicRoute = lazy(() => import('./routes/helpers/PublicRoutes'));
const Login = lazy(() => import('./pages/login'));

function App() {
  const currentToken = useSelector((state) => state.auth.token);
  const currentTheme = useSelector((state) => state.uiSettings.theme);
  const theme = currentTheme === 'light' ? lightTheme : darkTheme;
  const isLogged = currentToken;

  return (
    <Suspense fallback={<CircularProgress />}>
      <ThemeProvider theme={theme}>
        <Switch>
          <PublicRoute isLogged={isLogged} exact path='/login' name='Login Page' component={Login} />
          <PrivateRoutes isLogged={isLogged} path='/' component={LayoutApp} />
        </Switch>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
