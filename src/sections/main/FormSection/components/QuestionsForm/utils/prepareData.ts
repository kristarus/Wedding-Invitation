import { SendQuestionnaireParams } from 'services/wedding.service';
import { IQuestionsFormFields } from '../QuestionsForm.types';
import { AlcoholOptions } from '../constants/alcohol';
import { Presence } from '../constants/presence';

const prepareData = (data: IQuestionsFormFields): SendQuestionnaireParams => {
  const alcoholArray =
    data?.alcohol?.map(item => AlcoholOptions.find(({ value }) => item === value)?.label || item) || [];

  const presence = data.presence === Presence.YES ? 'Да' : 'Нет';

  return {
    ...data,
    alcohol: alcoholArray.join(', '),
    presence,
  };
};

export default prepareData;
