import React, { useMemo } from 'react';
import { Input as AntdInput, InputRef } from 'antd';
import { CompoundedInputComponent, IInputProps, InputVariant, IPasswordProps, ITextAreaProps } from './Input.types';

import './Input.styles.scss';

const Input = React.forwardRef<InputRef, IInputProps>(
  ({ variant = InputVariant.FILLED, className, ...props }: IInputProps, ref) => {
    const variantClass = useMemo(() => {
      if (variant === InputVariant.FILLED) {
        return 'np-input__filled';
      }

      if (variant === InputVariant.BORDERED) {
        return 'np-input__bordered';
      }
    }, [variant]);

    return <AntdInput ref={ref} size="large" className={`np-input ${variantClass} ${className}`} {...props} />;
  },
) as CompoundedInputComponent<InputRef, IInputProps>;

Input.Group = AntdInput.Group;
Input.Search = AntdInput.Search;

// TODO: Reuse input
Input.Password = React.forwardRef<InputRef, IPasswordProps>(
  ({ variant = InputVariant.FILLED, className, ...props }: IPasswordProps, ref) => {
    const variantClass = useMemo(() => {
      if (variant === InputVariant.FILLED) {
        return 'np-input__filled';
      }

      if (variant === InputVariant.BORDERED) {
        return 'np-input__bordered';
      }
    }, [variant]);

    return <AntdInput.Password ref={ref} size="large" className={`np-input ${variantClass} ${className}`} {...props} />;
  },
);

Input.TextArea = React.forwardRef<InputRef, ITextAreaProps>(
  ({ variant = InputVariant.FILLED, className, ...props }: ITextAreaProps, ref) => {
    const variantClass = useMemo(() => {
      if (variant === InputVariant.FILLED) {
        return 'np-input__filled';
      }

      if (variant === InputVariant.BORDERED) {
        return 'np-input__bordered';
      }
    }, [variant]);

    return (
      <AntdInput.TextArea
        ref={ref}
        size="large"
        className={`np-input np-input-textarea ${variantClass} ${className}`}
        {...props}
      />
    );
  },
);

export default Input;
