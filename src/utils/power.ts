import { Power } from 'constants/power';

export const getPowerLabel = (power: number) => {
  if (power === Power.DECA) {
    return 'da';
  }

  if (power === Power.HECTO) {
    return 'h';
  }

  if (power === Power.KILO) {
    return 'k';
  }

  if (power === Power.MEGA) {
    return 'M';
  }

  if (power === Power.GIGA) {
    return 'G';
  }

  if (power === Power.TERA) {
    return 'T';
  }

  if (power === Power.PETA) {
    return 'P';
  }

  if (power === Power.EXA) {
    return 'E';
  }

  if (power === Power.ZETTA) {
    return 'Z';
  }

  if (power === Power.YOTTA) {
    return 'Y';
  }

  if (power === Power.RONNA) {
    return 'R';
  }

  if (power === Power.QUETTA) {
    return 'Q';
  }

  return '';
};
