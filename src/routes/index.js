import React from 'react';

import Dashboard from '../pages/dashboard';
import Login from '../pages/login';

const routes = [
  {
    id: 'dashboard-page',
    path: '/dashboard',
    component: <Dashboard />,
    exact: true,
  },
  {
    id: 'login-page',
    path: '/login',
    component: <Login />,
    exact: true,
  },
];

export default routes;
