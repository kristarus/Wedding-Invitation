import React from 'react';
import { NavLink } from 'react-router-dom';

import { LogoColoredWhiteIcon, LogoLightIcon } from 'assets';

import { useTheme } from 'hooks/useTheme';

import { publicUrls } from 'constants/urls';

import './Logo.styles.scss';

const Logo = () => {
  const { isDarkMode } = useTheme();

  return (
    <NavLink to={publicUrls.main} className="np-header__logo">
      {isDarkMode ? <LogoColoredWhiteIcon /> : <LogoLightIcon />}
    </NavLink>
  );
};

export default Logo;
