import { useEffect, useMemo, useState } from 'react';
import { Form, FormInstance } from 'antd';

import _isEqual from 'lodash/isEqual';

const useForm = <T extends object>(form: FormInstance<T>) => {
  const [valid, setValid] = useState(false);

  const values = Form.useWatch([], form);

  const [initialValues, setInitialValues] = useState(values);
  const [touched, setTouched] = useState(false);

  const updateInitialData = (data: T) => {
    setInitialValues(data);
  };

  useEffect(() => {
    if (!initialValues && values) {
      setInitialValues(values);
    }
  }, [values, initialValues]);

  const changed = useMemo(() => {
    if (!values) {
      return false;
    }

    return !_isEqual(initialValues, values);
  }, [initialValues, values]);

  useEffect(() => {
    if (changed) {
      setTouched(true);
    }
  }, [changed]);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setValid(true))
      .catch(fields => {
        const hasErrors = fields?.errorFields?.length > 0;

        if (hasErrors) {
          setValid(false);
        } else {
          setValid(true);
        }
      });
  }, [form, values]);

  const submitDisabled = useMemo(() => !valid || !changed, [valid, changed]);

  return { valid, changed, touched, submitDisabled, updateInitialData };
};

export default useForm;
