import React, { useState, useEffect } from 'react';
import { Form } from 'antd';

import { Input } from 'components';
import RuleMessage from './components/RuleMessage';

import { regexp } from 'constants/regexp';

import { IPasswordValidationInputProps } from './PasswordValidationInput.types';

import './PasswordValidationInput.styles.scss';

const MIN_PASSWORD_LEN = 12;
const MAX_PASSWORD_LEN = 32;

const PasswordValidationInput = <T extends object>({
  form,
  name,
  rules,
  label,
  dependencies,
  passwordForMatch,
  ...props
}: IPasswordValidationInputProps<T>) => {
  const [isValidLength, setIsValidLength] = useState(false);
  const [hasUpper, setHasUpper] = useState(false);
  const [hasLower, setHasLower] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecial, setHasSpecial] = useState(false);

  const isPasswordMatchExists = typeof passwordForMatch === 'string';
  const [passwordMatch, setPasswordMatch] = useState(!isPasswordMatchExists);

  const password = Form.useWatch(name, form);

  const validatePassword = (value = '', passwordForCheck: string) => {
    setIsValidLength(value.length >= MIN_PASSWORD_LEN && value.length <= MAX_PASSWORD_LEN);
    setHasUpper(regexp.upperCase.test(value));
    setHasLower(regexp.lowerCase.test(value));
    setHasNumber(regexp.number.test(value));
    setHasSpecial(regexp.specialChar.test(value));

    if (passwordForCheck) {
      setPasswordMatch(value === passwordForCheck);
    }
  };

  useEffect(() => {
    validatePassword(password, passwordForMatch);
  }, [password, passwordForMatch]);

  return (
    <Form.Item
      validateFirst
      name={name}
      rules={rules}
      label={label}
      dependencies={dependencies}
      className="np-password-validation-input__form-item"
    >
      <div className="np-password-validation-input">
        <Input.Password {...props} />

        <div className="np-password-validation-input__rules">
          <RuleMessage valid={isValidLength} message="validation.password.length" />
          <RuleMessage valid={hasUpper} message="validation.hasUpperCase" />
          <RuleMessage valid={hasLower} message="validation.hasLowerCase" />
          <RuleMessage valid={hasNumber} message="validation.hasNumber" />
          <RuleMessage valid={hasSpecial} message="validation.hasSpecialChar" />
          {isPasswordMatchExists && <RuleMessage valid={passwordMatch} message="validation.password.mustMatch" />}
        </div>
      </div>
    </Form.Item>
  );
};

export default PasswordValidationInput;
