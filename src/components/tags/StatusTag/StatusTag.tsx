import React, { useMemo } from 'react';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import { useTheme } from 'hooks/useTheme';

import { IStatusTagProps, StatusTagSize } from './StatusTag.types';

import './StatusTag.styles.scss';

const { Text } = Typography;

const StatusTag = ({
  value,
  icon,
  color,
  backgroundColor,
  block,
  centralize = true,
  size = StatusTagSize.SMALL,
  className = '',
  style,
  ...props
}: IStatusTagProps) => {
  const { t } = useTranslation();

  const { colors } = useTheme();

  const themeColor = color || colors.TAB_TEXT_COLOR.toString();
  const themeBackgroundColor = backgroundColor || colors.OVERLAY_COLOR.toString();

  const width = block ? '100%' : 'fit-content';
  const margin = centralize ? '0 auto' : null;

  const sizeClass = useMemo(() => {
    switch (size) {
      case StatusTagSize.MEDIUM:
        return 'np-status-tag--medium';

      case StatusTagSize.SMALL:
        return 'np-status-tag--small';

      default:
        return '';
    }
  }, [size]);

  return (
    <div
      style={{ backgroundColor: themeBackgroundColor, width, margin, ...style }}
      className={`np-status-tag ${sizeClass} ${className}`}
      {...props}
    >
      {icon ? (
        <div className="np-status-tag__icon" style={{ color: themeColor, fill: themeColor }}>
          {icon}
        </div>
      ) : (
        <div className="np-status-tag__dot" style={{ backgroundColor: themeColor }} />
      )}

      <Text style={{ color: themeColor }}>{t(value)}</Text>
    </div>
  );
};

export default StatusTag;
