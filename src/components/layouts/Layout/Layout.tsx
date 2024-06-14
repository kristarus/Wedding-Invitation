import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import { ILayoutProps } from './Layout.types';

import './Layout.styles.scss';

const Layout = ({ children, className, ...props }: ILayoutProps) => {
  return (
    <div className={`np-layout ${className}`} {...props}>
      <Header />

      <div className="np-layout__content">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
