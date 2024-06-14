import { DropdownProps } from 'antd';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';

export interface IHeaderSelectProps extends DropdownProps {
  items: MenuItemType[];
  onSelect?: (info: { key: string }) => void;
  selectedKey?: string;
  selectable?: boolean;
  title?: string;
}
