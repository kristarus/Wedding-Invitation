import { Language } from 'types/languages';
import { DATE_DOT_FORMAT, DATE_SLASH_FORMAT } from './date';

import antEn from 'antd/locale/en_US';
import antRu from 'antd/locale/ru_RU';

import 'dayjs/locale/ru';

export const LangLocaleDateFormat = {
  [Language.EN]: DATE_SLASH_FORMAT,
  [Language.RU]: DATE_DOT_FORMAT,
};

export const AntLanguage = {
  [Language.EN]: antEn,
  [Language.RU]: antRu,
};
