import React from 'react';

import { LogoColoredBlackIcon, LogoColoredWhiteIcon } from 'assets';

import { useTheme } from 'hooks/useTheme';

import './Footer.styles.scss';

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="np-footer">
      <div className="np-footer__info">
        {isDarkMode ? (
          <LogoColoredWhiteIcon className="np-footer__logo" />
        ) : (
          <LogoColoredBlackIcon className="np-footer__logo" />
        )}
      </div>
    </div>
  );
};

export default Footer;
