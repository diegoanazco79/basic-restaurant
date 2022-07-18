import React from 'react';

/* Private routes */
const Dashboard = React.lazy(() => import('../pages/dashboard'));

const routes = [
  {
    path: '/',
    name: 'Home',
    permits: [],
    component: Dashboard,
    exact: true,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    permits: [],
    component: Dashboard,
    exact: true,
  },
];

export default routes;
