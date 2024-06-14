import React from 'react';
import { useTranslation } from 'react-i18next';

import { IBooleanLabelProps } from './BooleanLabel.types';

const DEFAULT_LABELS = { bool_true: 'common.yes', bool_false: 'common.no' };

const BooleanLabel = ({ value, labels = DEFAULT_LABELS }: IBooleanLabelProps) => {
  const { t } = useTranslation();

  return <>{value ? t(labels.bool_true) : t(labels.bool_false)}</>;
};

export default BooleanLabel;
