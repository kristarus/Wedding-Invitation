export enum Roles {
  FINANCIAL_CONTROLLER = 'fin-controller',
  INVESTIGATOR = 'investigator',
  FINANCIAL_DIRECTOR = 'fin-director',
}
export interface User {
  id: number;
  username: string;
  email: string;
  roles: string;
  roles_array: Roles[];
}
