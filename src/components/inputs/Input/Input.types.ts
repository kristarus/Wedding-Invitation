import { InputProps } from 'antd';
import Password, { PasswordProps } from 'antd/es/input/Password';
import { TextAreaProps, TextAreaRef } from 'antd/es/input/TextArea';
import Search from 'antd/es/input/Search';
import Group from 'antd/es/input/Group';

export interface IInputProps extends InputProps {
  variant?: InputVariant;
}

export interface IPasswordProps extends PasswordProps, IInputProps {}
export interface ITextAreaProps extends TextAreaProps {
  variant?: InputVariant;
}

export enum InputVariant {
  FILLED = 'filled',
  BORDERED = 'bordered',
}

export type CompoundedInputComponent<R, P> = React.ForwardRefExoticComponent<P & React.RefAttributes<R>> & {
  Group: typeof Group;
  Search: typeof Search;
  TextArea: React.ForwardRefExoticComponent<ITextAreaProps & React.RefAttributes<TextAreaRef>>;
  Password: typeof Password;
};
