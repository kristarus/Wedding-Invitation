import { ModalProps } from 'antd';

export interface IBaseModalProps extends ModalProps {
  icon?: JSX.Element;
  maxWidth?: number | string;
  loading?: boolean;
  onClose: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
