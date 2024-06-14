import { TabPaneProps, TabsProps } from 'antd';

export interface Tab extends Omit<TabPaneProps, 'tab'> {
  key: string;
  label: React.ReactNode;
  badge?: number;
}

export interface ICardTabsProps extends TabsProps {
  items: Tab[];
}
