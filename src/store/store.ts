import { combineReducers, configureStore } from '@reduxjs/toolkit';

import languageReducer from './reducers/LanguageSlice';
import themeReducer from './reducers/ThemeSlice';
import userReducer from './reducers/UserSlice';

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
  language: languageReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
