export interface IDateLabelProps {
  date?: string;
  options?: IDateLabelOptions;
}

interface IDateLabelOptions {
  format?: string;
  emptyValue?: string;
  utc?: boolean;
}
