import { DropdownProps } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';

export interface IMenuProps extends DropdownProps {
  items?: ItemType[];
  title: string;
  width?: string | number;
  style?: React.CSSProperties;
  onMenuItemClick?: (item: ItemType) => void;
}
