import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

type ObjectKeyType = string | number | symbol;

const useObjectsTranslation = <T extends object>(objects: T[], keys: ObjectKeyType[]) => {
  const { t } = useTranslation();

  return useMemo(() => {
    return objects.map(obj => {
      const translatedObjects = JSON.parse(JSON.stringify(obj));

      keys.forEach((key: ObjectKeyType) => {
        if (translatedObjects[key]) {
          translatedObjects[key] = t(translatedObjects[key]);
        }
      });

      return translatedObjects;
    });
  }, [keys, objects, t]);
};

export default useObjectsTranslation;
