import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Map from './components/Map';
import { SectionLayout } from 'components';
import LocationHeader from './components/LocationHeader';
import BirdsLeft from 'assets/images/location-birds-left.png';

import './LocationSection.styles.scss';

const LocationSection = () => {
  return (
    <SectionLayout bodyCentered fullScreenHeight={false} className="np-main-location-section">
      <ScrollAnimation animateOnce animateIn="fadeIn">
        <img src={BirdsLeft} draggable={false} className="np-main-location-section__img" />
      </ScrollAnimation>

      <ScrollAnimation animateOnce animateIn="fadeIn">
        <LocationHeader />
      </ScrollAnimation>

      <ScrollAnimation animateOnce animateIn="fadeIn" className="np-main-location-section__map">
        <Map />
      </ScrollAnimation>
    </SectionLayout>
  );
};

export default LocationSection;
