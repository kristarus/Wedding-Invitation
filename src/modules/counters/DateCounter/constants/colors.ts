import { ProgressProps } from 'antd';
import { DefaultColors } from 'types/colors';

export const StrokeColors: ProgressProps['strokeColor'] = {
  '0%': DefaultColors.GREEN_MEDIUM,
  '100%': DefaultColors.GREEN_BRIGHT,
};
