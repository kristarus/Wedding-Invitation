import React from 'react';
import { Switch } from 'antd';

import { MoonIcon, SunIcon } from 'assets';

import { useTheme } from 'hooks/useTheme';

import { ThemeMode } from 'types/theme';

import './ThemeSwitcher.styles.scss';

const ThemeSwitcher = () => {
  const { changeTheme, isDarkMode } = useTheme();

  const changeThemeMode = (checked: boolean) => {
    if (checked) {
      changeTheme(ThemeMode.LIGHT);
    } else {
      changeTheme(ThemeMode.DARK);
    }
  };

  return (
    <Switch
      checkedChildren={<SunIcon />}
      unCheckedChildren={<MoonIcon />}
      defaultChecked={!isDarkMode}
      onChange={changeThemeMode}
      className="np-theme-switcher"
    />
  );
};

export default ThemeSwitcher;
