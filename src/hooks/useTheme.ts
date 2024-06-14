import { useMemo } from 'react';
import { theme as antdTheme } from 'antd';

import { changeTheme as changeThemeStore } from 'store/reducers/ThemeSlice';
import { useAppSelector } from './redux/useAppSelector';
import { useAppDispatch } from './redux/useAppDispatch';

import { DarkColors, DefaultColors, LightColors, ThemeTokenDark, ThemeTokenLight } from 'types/colors';

import { ThemeMode } from 'types/theme';

export const useTheme = () => {
  const themeColorNames = Object.keys(LightColors);
  const defaultColorNames = Object.keys(DefaultColors);

  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(state => state.theme);

  const isDarkMode = theme === ThemeMode.DARK;
  const colors = isDarkMode ? DarkColors : LightColors;

  const themeConfig = useMemo(
    () => ({
      token: isDarkMode ? ThemeTokenDark : ThemeTokenLight,
      algorithm: isDarkMode ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
    }),
    [isDarkMode],
  );

  const changeThemeCssVariables = theme => {
    const themeColors = theme === ThemeMode.LIGHT ? LightColors : DarkColors;

    themeColorNames.forEach(color => {
      document.documentElement.style.setProperty(`--${color}`, themeColors[color]);
    });
  };

  const changeDefaultCssVariables = () => {
    defaultColorNames.forEach(color => {
      document.documentElement.style.setProperty(`--${color}`, DefaultColors[color]);
    });
  };

  const initTheme = () => {
    changeThemeCssVariables(theme);
    changeDefaultCssVariables();
  };

  const changeTheme = theme => {
    dispatch(changeThemeStore(theme));
    changeThemeCssVariables(theme);
  };

  return { theme, isDarkMode, colors, themeConfig, changeTheme, initTheme };
};
