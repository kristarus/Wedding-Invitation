import { createSlice } from '@reduxjs/toolkit';
import { StorageKey } from 'constants/localStorage';
import { ThemeMode } from 'types/theme';

const theme = localStorage.getItem(StorageKey.THEME);

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: theme || ThemeMode.LIGHT,
  },
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem(StorageKey.THEME, action.payload);
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
