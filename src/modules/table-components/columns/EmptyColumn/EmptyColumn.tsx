import React from 'react';
import { useTranslation } from 'react-i18next';

import { IEmptyColumnProps } from './EmptyColumn.types';

const EmptyColumn = ({ showText, emptyText = 'common.noData', className = '' }: IEmptyColumnProps) => {
  const { t } = useTranslation();

  if (!showText) {
    return null;
  }

  return <div className={className}>{t(emptyText)}</div>;
};

export default EmptyColumn;
