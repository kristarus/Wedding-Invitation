import { PickerDateProps } from 'antd/es/date-picker/generatePicker';
import dayjs from 'dayjs';

export interface IDatePickerProps extends Omit<PickerDateProps<dayjs.Dayjs>, 'value' | 'onChange'> {
  value: dayjs.Dayjs;
  disabled?: boolean;
  hideFooter?: boolean;
  onChange: (value: string, date: dayjs.Dayjs) => void;
}
