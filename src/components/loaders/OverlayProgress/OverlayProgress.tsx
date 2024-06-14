import React from 'react';
import { Progress, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import { Overlay } from 'components';

import { IOverlayProressProps } from './OverlayProgress.types';

import './OverlayProgress.styles.scss';

const { Text } = Typography;

const OverlayProgress = ({
  borderRadius,
  overlayColor,
  overlayOpacity,
  title,
  size = 30,
  strokeWidth = 12,
  className = '',
  format = () => null,
  ...props
}: IOverlayProressProps) => {
  const { t } = useTranslation();

  return (
    <Overlay
      borderRadius={borderRadius}
      overlayOpacity={overlayOpacity}
      overlayColor={overlayColor}
      className={`np-overlay-progress ${className}`}
    >
      <div style={{ backgroundColor: overlayColor }} className="np-overlay-progress__spin-wrapper">
        <Progress
          type="circle"
          status="active"
          size={size}
          strokeWidth={strokeWidth}
          format={format}
          className="np-overlay-progress__spin"
          {...props}
        />
      </div>

      {title && (
        <Text style={{ backgroundColor: overlayColor }} className="np-overlay-progress__text">
          {t(title)}
        </Text>
      )}
    </Overlay>
  );
};

export default OverlayProgress;
