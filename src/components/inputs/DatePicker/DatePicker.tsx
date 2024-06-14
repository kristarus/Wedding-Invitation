import React, { useState } from 'react';
import { DatePicker as AntDatePicker } from 'antd';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';

import { Button } from 'components';

import { useLanguage } from 'hooks/useLanguage';
import { DateType, isBiggerDate } from 'utils/date';

import { AntLanguage } from 'constants/language';
import { DATE_SLASH_FORMAT } from 'constants/date';

import { IDatePickerProps } from './DatePicker.types';

import './DatePicker.styles.scss';

const DatePicker = ({ value, hideFooter, onChange, ...props }: IDatePickerProps) => {
  const { t } = useTranslation();
  const { language, localeDateFormat } = useLanguage();

  const [open, setOpen] = useState(false);

  const disabledDate = (current: DateType) => {
    return isBiggerDate(current, dayjs());
  };

  const onChangeDate = (date: dayjs.Dayjs) => {
    const value = date ? date.format(DATE_SLASH_FORMAT) : null;

    onChange(value, date);
    setOpen(false);
  };

  return (
    <AntDatePicker
      open={open}
      onOpenChange={setOpen}
      size="middle"
      value={value}
      format={localeDateFormat}
      locale={AntLanguage[language]}
      placeholder={t('form.placeholder.date')}
      disabledDate={disabledDate}
      onChange={onChangeDate}
      showToday={false}
      className="np-date-picker"
      popupClassName="np-date-picker__popup"
      renderExtraFooter={() =>
        !hideFooter && (
          <div className="np-date-picker__footer">
            <Button type="default" onClick={() => onChangeDate(dayjs().add(-1, 'day'))}>
              {t('common.yesterday')}
            </Button>
            <Button type="default" onClick={() => onChangeDate(dayjs())}>
              {t('common.today')}
            </Button>
          </div>
        )
      }
      {...props}
    />
  );
};

export default DatePicker;
