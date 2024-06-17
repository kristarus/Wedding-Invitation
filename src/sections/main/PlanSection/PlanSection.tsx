import React from 'react';

import Plan from './components/Plan';
import { SectionLayout } from 'components';
import BirdsRight from 'assets/images/location-birds-right.png';

import './PlanSection.styles.scss';

const PlanSection = () => {
  return (
    <SectionLayout bodyCentered fullScreenHeight={false} className="np-main-plan-section">
      <span className="np-main-plan-section__title">План мероприятия</span>

      <Plan />

      <img src={BirdsRight} draggable={false} className="np-main-plan-section__img" />
    </SectionLayout>
  );
};

export default PlanSection;
