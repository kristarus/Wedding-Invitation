import { FormInstance } from 'antd';
import { Rule } from 'antd/es/form';
import { NamePath } from 'antd/es/form/interface';
import { IInputProps } from '../Input';

export interface IPasswordValidationInputProps<T> extends Omit<IInputProps, 'form'> {
  form: FormInstance<T>;
  passwordForMatch?: string;
  rules?: Rule[];
  dependencies?: NamePath[];
  label?: string;
}
