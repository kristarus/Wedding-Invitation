import i18n from 'config/i18n';
import { createSlice } from '@reduxjs/toolkit';
import { Language } from 'types/languages';

const defaultLanguage = Language.EN;

const changeDocLanguage = (language: Language) => {
  document.documentElement.lang = language;
};

const getLanguage = () => {
  const allowedLanguages = Object.values(Language);
  const language = allowedLanguages.find(language => i18n.language.includes(language)) || defaultLanguage;

  changeDocLanguage(language);

  return language;
};

interface LanguageState {
  language: string;
}

const initialState: LanguageState = {
  language: getLanguage(),
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      i18n.changeLanguage(action.payload);
      changeDocLanguage(action.payload);
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
