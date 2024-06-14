import React from 'react';
import loadable from '@loadable/component';
import { Routes as DomRoutes, Route } from 'react-router-dom';

import { PageLoader } from 'components';

const MainPage = loadable(() => import('../pages/MainPage'), {
  fallback: <PageLoader />,
});

function Routes() {
  return (
    <DomRoutes>
      <Route path="*" element={<MainPage />} />
    </DomRoutes>
  );
}

export default Routes;
