import React from 'react';
import { DetailsSection, InvitationSection, LocationSection, PlanSection, WelcomeSection } from 'sections';

const MainPage = () => {
  return (
    <>
      <WelcomeSection />
      <InvitationSection />
      <LocationSection />
      <PlanSection />
      <DetailsSection />
    </>
  );
};

export default MainPage;
