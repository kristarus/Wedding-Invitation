import { useTranslation } from 'react-i18next';

import { regexp } from 'constants/regexp';

import { Rule } from 'antd/es/form';
import { ValidatorRule } from 'rc-field-form/lib/interface';

interface IValidatorHook {
  required: Rule;
  requiredNoMessage: Rule;
  email: Rule;
  digitsOnly: Rule;
  hasUpperCase: Rule;
  hasLowerCase: Rule;
  hasNumber: Rule;
  hasSpecialChar: Rule;

  ga: Rule[];
  password: Rule[];

  passwordWithMatch: (match?: string) => Rule[];
}

enum ErrorMessage {
  REQUIRED = 'validation.required',
  EMAIL_NOT_VALID = 'validation.email.notValid',
  DIGITS_ONLY = 'validation.digitsOnly',
  GA_LENGTH = 'validation.ga.length',
  HAS_UPPER_CASE = 'validation.hasUpperCase',
  HAS_LOWER_CASE = 'validation.hasLowerCase',
  HAS_NUMBER = 'validation.hasNumber',
  HAS_SPECIAL_CHAR = 'validation.hasSpecialChar',
}

export default function useValidation(): IValidatorHook {
  const { t } = useTranslation();

  const required: Rule = { required: true, message: t(ErrorMessage.REQUIRED) };
  const requiredNoMessage: Rule = { required: true, message: '' };
  const email: Rule = { type: 'email', message: t(ErrorMessage.EMAIL_NOT_VALID) };
  const digitsOnly: Rule = { pattern: regexp.digitsOnly, message: t(ErrorMessage.DIGITS_ONLY) };
  const hasUpperCase: Rule = { pattern: regexp.upperCase, message: t(ErrorMessage.HAS_UPPER_CASE) };
  const hasLowerCase: Rule = { pattern: regexp.lowerCase, message: t(ErrorMessage.HAS_LOWER_CASE) };
  const hasNumber: Rule = { pattern: regexp.number, message: t(ErrorMessage.HAS_NUMBER) };
  const hasSpecialChar: Rule = { pattern: regexp.specialChar, message: t(ErrorMessage.HAS_SPECIAL_CHAR) };

  const getLenRule = (len: number, message: string): Rule => {
    return { len, message: t(message) };
  };

  const getMinLenRule = (min: number, message: string): Rule => {
    return { min, message: t(message) };
  };

  const getMaxLenRule = (max: number, message: string): Rule => {
    return { max, message: t(message) };
  };

  const getGoogleAuthenticatorValidator = (): Rule[] => {
    const length = getLenRule(6, ErrorMessage.GA_LENGTH);

    return [required, digitsOnly, length];
  };

  const getPasswordValidationRules = (passwordMatch?: string): Rule[] => {
    const validatorRule: ValidatorRule = {
      validator: (_, value, callback) => {
        let passwordsMatched = true;

        if (passwordMatch) {
          passwordsMatched = passwordMatch === value;
        }

        return callback(passwordsMatched ? undefined : '');
      },
    };

    const minLen = getMinLenRule(12, '');
    const maxLen = getMaxLenRule(32, '');

    return [required, minLen, maxLen, hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar, validatorRule];
  };

  return {
    required,
    requiredNoMessage,
    email,
    digitsOnly,
    hasUpperCase,
    hasLowerCase,
    hasNumber,
    hasSpecialChar,
    ga: getGoogleAuthenticatorValidator(),
    password: getPasswordValidationRules(),
    passwordWithMatch: getPasswordValidationRules,
  };
}
