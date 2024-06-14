import React from 'react';
import { Space } from 'antd';

import ThemeSwitcher from 'components/switchers/ThemeSwitcher/ThemeSwitcher';
import LanguageSelect from './components/LanguageSelect/LanguageSelect';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import UserMenu from './components/UserMenu/UserMenu';
import Logo from './components/Logo/Logo';

import './Header.styles.scss';

const Header = () => {
  return (
    <div className="np-header">
      <div className="np-header__body">
        <Space size={20}>
          <Logo />
          <LanguageSelect />
        </Space>

        <NavigationMenu />

        <Space size={20}>
          <ThemeSwitcher />
          <UserMenu />
        </Space>
      </div>
    </div>
  );
};

export default Header;
