import React, { useState } from 'react';
import { Checkbox, Form, Radio, notification } from 'antd';

import { Button, Input } from 'components';

import useForm from 'hooks/useForm';
import prepareData from './utils/prepareData';
import useValidation from 'hooks/useValidation';
import { sendQuestionnaire } from 'services/wedding.service';

import { AlcoholOptions } from './constants/alcohol';
import { PresenceOptions } from './constants/presence';

import { IQuestionsFormFields } from './QuestionsForm.types';

import './QuestionsForm.styles.scss';

const QuestionsForm = () => {
  const rule = useValidation();
  const [form] = Form.useForm<IQuestionsFormFields>();
  const [notificationApi, notificationContainer] = notification.useNotification();

  const { submitDisabled } = useForm(form);

  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: IQuestionsFormFields) => {
    setLoading(true);

    const body = prepareData(values);

    const { success } = await sendQuestionnaire(body);

    if (success) {
      notificationApi.success({ message: 'Ваша анкета успешно отправлена!' });
      form.resetFields();
    } else {
      notificationApi.error({ message: 'Ошибка! Обновите страницу и попробуйте снова.' });
    }

    setLoading(false);
  };

  return (
    <>
      <Form
        form={form}
        name="questions-form"
        layout="vertical"
        scrollToFirstError
        onFinish={onSubmit}
        className="np-main-form-questions-form"
      >
        <Form.Item name="name" label="Ваше Имя и Фамилия" rules={[rule.required]}>
          <Input disabled={loading} />
        </Form.Item>

        <Form.Item name="presence" label="Планируете ли присутсвовать на свадьбе?" rules={[rule.required]}>
          <Radio.Group disabled={loading}>
            {PresenceOptions.map(option => (
              <Radio key={option.value} value={option.value}>
                {option.label}
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>

        <Form.Item name="alcohol" label="Ваши предпочтения по алкоголю">
          <Checkbox.Group disabled={loading}>
            {AlcoholOptions.map(option => (
              <Checkbox key={option.value} value={option.value}>
                {option.label}
              </Checkbox>
            ))}
          </Checkbox.Group>
        </Form.Item>

        <Form.Item name="note" label="Примечание">
          <Input.TextArea disabled={loading} />
        </Form.Item>

        <Form.Item>
          <Button block loading={loading} disabled={submitDisabled} htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>

      {notificationContainer}
    </>
  );
};

export default QuestionsForm;
