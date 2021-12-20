import React from 'react';
import { RouteConfig } from 'react-router-config';

import RWDiscover from '../pages/discover';

const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: RWDiscover,
  },
];

export default routes;
