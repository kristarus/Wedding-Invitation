import { ReactNode } from 'react';

export const getSliderMarks = (values = [], formatter: (value: unknown) => unknown = value => value) => {
  const marks = {};

  values.forEach(value => {
    marks[value] = formatter(value);
  });

  return marks;
};

type MarkValueType = number | string | ReactNode;

interface SliderMarkType<T extends MarkValueType> {
  key?: T;
  label: MarkValueType;
}

type SliderMarksType<T extends MarkValueType> = Record<number, SliderMarkType<T>>;
type DivideSliderMarksFormatter<T> = (value: T, index: number) => MarkValueType;

export const divideSliderMarksIntoEqualParts = <T extends MarkValueType>(
  values: T[] = [],
  formatter: DivideSliderMarksFormatter<T> = value => value,
): SliderMarksType<T> => {
  const size = values.length - 1;

  const step = Math.ceil(100 / size);

  const marks = {} as SliderMarksType<T>;

  values.forEach((value, index) => {
    const newValue = { key: value, label: formatter(value, index) };

    const key = index === values.length - 1 ? 100 : index * step;

    marks[key] = newValue;
  });

  return marks;
};
