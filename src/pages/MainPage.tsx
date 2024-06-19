import React from 'react';
import { DetailsSection, FormSection, InvitationSection, LocationSection, PlanSection, WelcomeSection } from 'sections';

const MainPage = () => {
  return (
    <>
      <WelcomeSection />
      <InvitationSection />
      <LocationSection />
      <PlanSection />
      <DetailsSection />
      <FormSection />
    </>
  );
};

export default MainPage;
