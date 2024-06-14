import { SectionLayout } from 'components';
import React from 'react';
import { WelcomeSection } from 'sections';

const MainPage = () => {
  return (
    <>
      <WelcomeSection />
      <SectionLayout style={{ backgroundColor: 'rgb(20 85 72)' }}>lalala</SectionLayout>
    </>
  );
};

export default MainPage;
