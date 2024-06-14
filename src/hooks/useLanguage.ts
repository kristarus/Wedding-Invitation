import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from './redux/useAppSelector';

import { LangLocaleDateFormat } from 'constants/language';

import { Language } from 'types/languages';

export const useLanguage = () => {
  const { language } = useAppSelector(state => state.language);
  const { i18n } = useTranslation();

  const localeDateFormat = useMemo(() => {
    if (i18n.language.includes(Language.RU)) {
      return LangLocaleDateFormat[Language.RU];
    }

    return LangLocaleDateFormat[Language.EN];
  }, [i18n.language]);

  return { language, localeDateFormat };
};
