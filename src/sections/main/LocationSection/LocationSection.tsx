import React from 'react';

import Map from './components/Map';
import { SectionLayout } from 'components';
import LocationHeader from './components/LocationHeader';
import BirdsLeft from 'assets/images/location-birds-left.png';

import './LocationSection.styles.scss';

const LocationSection = () => {
  return (
    <SectionLayout bodyCentered fullScreenHeight={false} className="np-main-location-section">
      <img src={BirdsLeft} draggable={false} className="np-main-location-section__img" />

      <LocationHeader />
      <Map />
    </SectionLayout>
  );
};

export default LocationSection;
