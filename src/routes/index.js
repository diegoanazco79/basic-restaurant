import React from 'react';

import Dashboard from '../pages/dashboard';
import Login from '../pages/login';

const routes = [
  {
    path: '/dashboard',
    component: <Dashboard />,
    exact: true,
  },
  {
    path: '/login',
    component: <Login />,
    exact: true,
  },
];

export default routes;
