import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Header from './components/Header';
import { SectionLayout } from 'components';
import QuestionsForm from './components/QuestionsForm';

import FooterSrc from 'assets/images/footer.png';

import './FormSection.styles.scss';

const FormSection = () => {
  return (
    <SectionLayout bodyCentered fullScreenHeight={false} className="np-main-form-section">
      <ScrollAnimation animateOnce animateIn="fadeIn">
        <Header />
      </ScrollAnimation>

      <ScrollAnimation animateOnce animateIn="fadeIn" className="np-main-form-section__form">
        <QuestionsForm />
      </ScrollAnimation>

      <ScrollAnimation animateOnce animateIn="fadeIn">
        <img src={FooterSrc} draggable={false} className="np-main-form-section__img" />
      </ScrollAnimation>
    </SectionLayout>
  );
};

export default FormSection;
