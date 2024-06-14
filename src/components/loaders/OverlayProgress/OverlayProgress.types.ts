import { ProgressProps } from 'antd';
import { IOverlayProps } from '../Overlay/Overlay.types';

type BaseProps = ProgressProps & IOverlayProps;

export interface IOverlayProressProps extends BaseProps {
  title?: string;
}
