import { Tab } from '../../CardTabs.types';

export interface ICardTabsBarProps {
  items: Tab[];
  activeKey: string;
  onTabClick: (key: string, e: React.MouseEvent | React.KeyboardEvent) => void;
}
