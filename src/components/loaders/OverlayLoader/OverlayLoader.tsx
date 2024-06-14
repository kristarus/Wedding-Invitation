import React from 'react';

import { Overlay, Spin } from 'components';

import { IOverlayLoaderProps } from './OverlayLoader.types';

import './OverlayLoader.styles.scss';

const OverlayLoader = ({
  borderRadius,
  overlayColor,
  overlayOpacity,
  className = '',
  ...props
}: IOverlayLoaderProps) => {
  return (
    <Overlay
      borderRadius={borderRadius}
      overlayColor={overlayColor}
      overlayOpacity={overlayOpacity}
      className={className}
    >
      <Spin {...props} />
    </Overlay>
  );
};

export default OverlayLoader;
