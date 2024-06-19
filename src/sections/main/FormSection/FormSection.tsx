import React from 'react';

import Header from './components/Header';
import { SectionLayout } from 'components';
import QuestionsForm from './components/QuestionsForm';

import FooterSrc from 'assets/images/footer.png';

import './FormSection.styles.scss';

const FormSection = () => {
  return (
    <SectionLayout bodyCentered fullScreenHeight={false} className="np-main-form-section">
      <Header />
      <QuestionsForm />

      <img src={FooterSrc} draggable={false} className="np-main-form-section__img" />
    </SectionLayout>
  );
};

export default FormSection;
