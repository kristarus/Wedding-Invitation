import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Plan from './components/Plan';
import { SectionLayout } from 'components';
import BirdsRight from 'assets/images/location-birds-right.png';

import './PlanSection.styles.scss';

const PlanSection = () => {
  return (
    <SectionLayout bodyCentered fullScreenHeight={false} className="np-main-plan-section">
      <ScrollAnimation animateOnce animateIn="fadeIn">
        <img src={BirdsRight} draggable={false} className="np-main-plan-section__img" />
      </ScrollAnimation>

      <ScrollAnimation animateOnce animateIn="fadeIn" className="np-main-plan-section__header">
        <span className="np-main-plan-section__title">План мероприятия</span>
      </ScrollAnimation>

      <Plan />
    </SectionLayout>
  );
};

export default PlanSection;
