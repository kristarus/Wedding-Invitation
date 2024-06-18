import React from 'react';

import { SectionLayout } from 'components';
import Details from './components/Details';

import './DetailsSection.styles.scss';

const DetailsSection = () => {
  return (
    <SectionLayout bodyCentered fullScreenHeight={false} className="np-main-details-section">
      <span className="np-main-details-section__title">Детали</span>

      <Details />
    </SectionLayout>
  );
};

export default DetailsSection;
