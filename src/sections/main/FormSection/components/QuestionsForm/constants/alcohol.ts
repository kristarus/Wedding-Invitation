export enum Alcohol {
  WINE = 'wine',
  CHAMPAGNE = 'champagne',
  VODKA = 'vodka',
  WHISKEY = 'whiskey',
  COGNAC = 'cognac',
  NO_ALCO = 'no-alco',
}

export const AlcoholOptions = [
  {
    value: Alcohol.WINE,
    label: 'Вино',
  },
  {
    value: Alcohol.CHAMPAGNE,
    label: 'Шампанское',
  },
  {
    value: Alcohol.VODKA,
    label: 'Водка',
  },
  {
    value: Alcohol.WHISKEY,
    label: 'Виски',
  },
  {
    value: Alcohol.COGNAC,
    label: 'Коньяк',
  },
  {
    value: Alcohol.NO_ALCO,
    label: 'Безалкогольные',
  },
];
