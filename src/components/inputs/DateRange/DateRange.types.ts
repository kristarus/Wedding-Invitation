import { PickerDateProps } from 'antd/es/date-picker/generatePicker';
import dayjs from 'dayjs';

export interface IDateRangeProps extends Omit<PickerDateProps<dayjs.Dayjs>, 'value' | 'onChange'> {
  value: { from?: dayjs.Dayjs; to?: dayjs.Dayjs };
  disabled?: boolean;
  onChange: (field: string, value: string, date: dayjs.Dayjs) => void;
}

export enum DateField {
  FROM = 'from',
  TO = 'to',
}
