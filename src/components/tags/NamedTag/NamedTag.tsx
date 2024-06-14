import React from 'react';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import { Spin } from 'components';

import { useTheme } from 'hooks/useTheme';

import { INamedTagProps } from './NamedTag.types';

import './NamedTag.styles.scss';

const { Text } = Typography;

const NamedTag = ({
  title,
  titleIcon,
  color,
  icon,
  value,
  block,
  minWidth,
  loading,
  noDataText = '—',
  className = '',
  style,
  ...props
}: INamedTagProps) => {
  const { t } = useTranslation();

  const { colors } = useTheme();

  const themeColor = color || colors.TAB_TEXT_COLOR.toString();

  const width = block ? '100%' : 'fit-content';

  return (
    <div style={{ width, minWidth, ...style }} className={`np-named-tag ${className}`} {...props}>
      <div className="np-named-tag__header">
        <Text className="np-named-tag__header-title">{t(title)}</Text>

        {titleIcon}
      </div>

      <div className="np-named-tag__body">
        {loading ? (
          <Spin size="default" />
        ) : (
          <>
            <div className="np-named-tag__body-icon" style={{ color: themeColor, fill: themeColor }}>
              {icon}
            </div>

            <Text className="np-named-tag__body-title" style={{ color: themeColor }}>
              {typeof value === 'string' ? t(value || noDataText) : value || t(noDataText)}
            </Text>
          </>
        )}
      </div>
    </div>
  );
};

export default NamedTag;
