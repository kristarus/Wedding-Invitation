import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import { MonthCalendar } from 'modules';
import { SectionLayout } from 'components';
import InvitationHeader from './components/InvitationHeader';

import { WEDDING_DATE, WEDDING_MONTH, WEDDING_YEAR } from 'constants/wedding';

import './InvitationSection.styles.scss';

const InvitationSection = () => {
  return (
    <SectionLayout bodyCentered fullScreenHeight={false} className="np-main-invitation-section">
      <ScrollAnimation animateOnce animateIn="fadeIn">
        <InvitationHeader />
      </ScrollAnimation>

      <ScrollAnimation animateOnce animateIn="fadeIn">
        <MonthCalendar date={WEDDING_DATE} month={WEDDING_MONTH} year={WEDDING_YEAR} />
      </ScrollAnimation>

      <ScrollAnimation animateOnce animateIn="fadeIn">
        <div className="np-main-invitation-section__desc">17 августа 2024</div>
      </ScrollAnimation>
    </SectionLayout>
  );
};

export default InvitationSection;
