import React from 'react';
import HeaderSelect from '../common/HeaderSelect';

import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import { setLanguage } from 'store/reducers/LanguageSlice';

import { LanguageMenuItems } from './constants/languages';

const LanguageSelect = () => {
  const dispatch = useAppDispatch();
  const { language } = useAppSelector(state => state.language);

  const onLangChange = (e: { key: string }) => {
    dispatch(setLanguage(e.key));
  };

  return <HeaderSelect items={LanguageMenuItems} onSelect={onLangChange} selectedKey={language} selectable />;
};

export default LanguageSelect;
