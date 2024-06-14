import React from 'react';
import { Breadcrumb as AntdBreadcrumb } from 'antd';

import { IBreadcrumb } from './Breadcrumb.types';

import './Breadcrumb.styles.scss';

const Breadcrumb = ({ className = '', ...props }: IBreadcrumb) => {
  return <AntdBreadcrumb className={`np-breadcrumb ${className}`} {...props} />;
};

export default Breadcrumb;
