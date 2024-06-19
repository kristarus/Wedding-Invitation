import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import { SectionLayout } from 'components';
import Details from './components/Details';

import './DetailsSection.styles.scss';

const DetailsSection = () => {
  return (
    <SectionLayout bodyCentered fullScreenHeight={false} className="np-main-details-section">
      <ScrollAnimation animateOnce animateIn="fadeIn" className="np-main-details-section__header">
        <span className="np-main-details-section__title">Детали</span>
      </ScrollAnimation>

      <Details />
    </SectionLayout>
  );
};

export default DetailsSection;
