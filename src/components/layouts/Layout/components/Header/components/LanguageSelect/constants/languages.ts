import { MenuItemType } from 'antd/es/menu/hooks/useItems';
import { Language } from 'types/languages';

export const LanguageMenuItems: MenuItemType[] = [
  { label: 'EN', key: Language.EN },
  { label: 'RU', key: Language.RU },
];
