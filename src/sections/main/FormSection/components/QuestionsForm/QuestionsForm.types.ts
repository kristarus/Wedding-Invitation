import { Presence } from './constants/presence';

export interface IQuestionsFormFields {
  name: string;
  presence: Presence;
  alcohol?: string[];
  note?: string;
}
