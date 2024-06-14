import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { Language } from 'types/languages';
import { enLng, ruLng } from './langs';

const DEFAULT_LANG = Language.EN;

const resources = {
  [Language.EN]: {
    translation: enLng,
  },
  [Language.RU]: {
    translation: ruLng,
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: DEFAULT_LANG,
  resources,
});

export default i18n;
