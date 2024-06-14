import React from 'react';
import { BaseComponentProps } from 'types/components';

export interface IOverlayProps extends BaseComponentProps {
  borderRadius?: number;
  overlayColor?: string;
  overlayOpacity?: number;
  children?: React.ReactNode;
}
