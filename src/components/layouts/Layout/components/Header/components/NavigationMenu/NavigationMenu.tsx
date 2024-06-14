import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu } from 'antd';

import useNavigationItems from './hooks/useNavigationItems';

import './NavigationMenu.styles.scss';

const NavigationMenu = () => {
  const location = useLocation();

  const [current, setCurrent] = useState('');

  const navigationItems = useNavigationItems();

  const onMenuClick = (e: { key: string }) => {
    setCurrent(e.key);
  };

  useEffect(() => {
    setCurrent(location.pathname);
  }, [location]);

  return (
    <Menu
      mode="horizontal"
      selectedKeys={[current]}
      items={navigationItems}
      onClick={onMenuClick}
      className="np-header__navigation-menu"
    />
  );
};

export default NavigationMenu;
