import React from 'react';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import { ISectionLayoutProps } from './SectionLayout.types';

import './SectionLayout.styles.scss';

const { Text } = Typography;

const SectionLayout = ({
  children,
  className,
  title,
  headerCentered,
  bodyCentered,
  verticalCentered,
  rightHeaderComponent,
  bottomComponent,
  fullScreenHeight = true,
  ...props
}: ISectionLayoutProps) => {
  const { t } = useTranslation();

  const centeredHeaderClass = headerCentered ? 'np-section-layout__header--center' : '';
  const centeredBodyClass = bodyCentered ? 'np-section-layout__body--center' : '';
  const verticalCenteredClass = verticalCentered ? 'np-section-layout--center' : '';

  const fullScreenHeightClass = fullScreenHeight ? 'np-section-layout--full-screen' : '';

  return (
    <div className="np-section-layout-wrapper">
      <div className={`np-section-layout ${verticalCenteredClass} ${fullScreenHeightClass} ${className}`} {...props}>
        <div className={`np-section-layout__header ${centeredHeaderClass}`}>
          {title && <Text className={`np-section-layout__title`}>{t(title)}</Text>}
          {rightHeaderComponent}
        </div>

        <div className={`np-section-layout__body ${centeredBodyClass}`}>{children}</div>
      </div>

      {bottomComponent}
    </div>
  );
};

export default SectionLayout;
