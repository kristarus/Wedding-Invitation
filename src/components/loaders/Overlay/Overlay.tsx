import React from 'react';
import hexToRgba from 'hex-to-rgba';

import { IOverlayProps } from './Overlay.types';

import './Overlay.styles.scss';

const Overlay = ({
  borderRadius,
  overlayColor,
  overlayOpacity,
  children,
  className = '',
  style,
  ...props
}: IOverlayProps) => {
  const isHexColor = overlayColor && overlayColor.startsWith('#');
  const rgbaColor = isHexColor ? hexToRgba(overlayColor, overlayOpacity) : overlayColor;

  return (
    <div
      style={{ borderRadius, backgroundColor: rgbaColor, ...style }}
      className={`np-overlay ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Overlay;
