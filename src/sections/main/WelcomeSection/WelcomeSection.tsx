import React from 'react';

import { DateCounter } from 'modules';
import { SectionLayout } from 'components';
import WelcomeTitle from './components/WelcomeTitle';

import useWindowResponsiveness from 'hooks/useWindowResponsiveness';

import { WEDDING_DATE } from 'constants/wedding';

import './WelcomeSection.styles.scss';

const WelcomeSection = () => {
  const { isMobileView } = useWindowResponsiveness(450);
  return (
    <SectionLayout verticalCentered className="np-main-welcome-section">
      <WelcomeTitle />
      <DateCounter date={WEDDING_DATE} title="До свадьбы осталось:" options={{ size: isMobileView ? 70 : 90 }} />
    </SectionLayout>
  );
};

export default WelcomeSection;
