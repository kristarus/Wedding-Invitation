import { SendQuestionnaireParams } from 'services/wedding.service';
import { IQuestionsFormFields } from '../QuestionsForm.types';
import { Presence } from '../constants/presence';
import { AlcoholOptions } from '../constants/alcohol';

const prepareData = (data: IQuestionsFormFields): SendQuestionnaireParams => {
  const alcoholArray =
    data?.alcohol?.map(item => AlcoholOptions.find(({ value }) => item === value)?.label || item) || [];

  const presence = Presence.YES ? 'Да' : 'Нет';

  return {
    ...data,
    alcohol: alcoholArray.join(', '),
    presence,
  };
};

export default prepareData;
