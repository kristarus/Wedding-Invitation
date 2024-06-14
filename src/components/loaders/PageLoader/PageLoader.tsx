import React from 'react';

import Spin from '../Spin';

import './PageLoader.styles.scss';

const PageLoader = () => {
  return (
    <div className="np-page-loader__overlay">
      <Spin />
    </div>
  );
};

export default PageLoader;
