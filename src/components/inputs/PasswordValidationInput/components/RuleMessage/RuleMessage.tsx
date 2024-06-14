import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckOutlined, MinusOutlined } from '@ant-design/icons';

import { IRuleMessageProps } from './RuleMessage.types';

import './RuleMessage.styles.scss';

const RuleMessage = ({ valid, message }: IRuleMessageProps) => {
  const { t } = useTranslation();

  const getDataType = (isValid: boolean) => {
    return isValid ? 'success' : 'default';
  };

  return (
    <span data-type={getDataType(valid)}>
      {valid ? <CheckOutlined /> : <MinusOutlined />}
      &nbsp;
      {t(message)}
    </span>
  );
};

export default RuleMessage;
