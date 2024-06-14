import React from 'react';
import { Tooltip, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { QuestionCircleOutlined } from '@ant-design/icons';

import { ILabelWithTooltipProps } from './LabelWithTooltip.types';

import './LabelWithTooltip.styles.scss';

const { Text } = Typography;

const LabelWithTooltip = ({ label, tooltip, center, colon }: ILabelWithTooltipProps) => {
  const { t } = useTranslation();

  const margin = center ? '0 auto' : null;

  return (
    <div className="np-label-with-tooltip" style={{ margin }}>
      <Text className="np-label-with-tooltip__label">
        {t(label)}
        {colon ? ':' : ''}
      </Text>

      <Tooltip title={tooltip}>
        <QuestionCircleOutlined className="np-label-with-tooltip__icon" />
      </Tooltip>
    </div>
  );
};

export default LabelWithTooltip;
