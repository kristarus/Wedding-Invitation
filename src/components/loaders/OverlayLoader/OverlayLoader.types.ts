import { IOverlayProps } from '../Overlay/Overlay.types';
import { ISpinProps } from '../Spin';

type BaseProps = ISpinProps & IOverlayProps;

export interface IOverlayLoaderProps extends BaseProps {}
