import React from 'react';

import { MonthCalendar } from 'modules';
import { SectionLayout } from 'components';
import InvitationHeader from './components/InvitationHeader';

import { WEDDING_DATE, WEDDING_MONTH, WEDDING_YEAR } from 'constants/wedding';

import './InvitationSection.styles.scss';

const InvitationSection = () => {
  return (
    <SectionLayout verticalCentered className="np-main-invitation-section">
      <InvitationHeader />
      <MonthCalendar date={WEDDING_DATE} month={WEDDING_MONTH} year={WEDDING_YEAR} />

      <div className="np-main-invitation-section__desc">17 августа 2024</div>
    </SectionLayout>
  );
};

export default InvitationSection;
