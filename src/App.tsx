import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

import routes from './router';

import RWAppHeader from './components/layout/app-header';
import RWAppFooter from './components/layout/app-footer';

export default memo(function App() {
  return (
    <HashRouter>
      <RWAppHeader />
      {renderRoutes(routes)}
      <RWAppFooter />
    </HashRouter>
  );
});
