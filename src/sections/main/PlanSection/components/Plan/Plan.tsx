import React from 'react';

import Buffet from 'assets/images/buffet.png';
import Ceremony from 'assets/images/ceremony.png';
import Banquet from 'assets/images/banquet.png';
import { ArrowRightIcon } from 'assets';

import './Plan.styles.scss';

const Plan = () => {
  return (
    <div className="np-main-plan-section-plan">
      <div className="np-main-plan-section-plan__block">
        <div className="np-main-plan-section-plan__item">
          <img src={Buffet} alt="Buffet" className="np-main-plan-section-plan__item-img" />
          <span className="np-main-plan-section-plan__item-title">14:00</span>

          <div className="np-main-plan-section-plan__item-desc-wrapper">
            <span className="np-main-plan-section-plan__item-desc">Сбор гостей,</span>
            <span className="np-main-plan-section-plan__item-desc">приветственный фуршет</span>
          </div>
        </div>

        <ArrowRightIcon className="np-main-plan-section-plan__block-arrow" />
      </div>

      <div className="np-main-plan-section-plan__block">
        <ArrowRightIcon className="np-main-plan-section-plan__block-arrow flip" />

        <div className="np-main-plan-section-plan__item">
          <img src={Ceremony} alt="Ceremony" className="np-main-plan-section-plan__item-img" />
          <span className="np-main-plan-section-plan__item-title">14:30</span>

          <div className="np-main-plan-section-plan__item-desc-wrapper">
            <span className="np-main-plan-section-plan__item-desc">Торжественная церемония</span>
            <span className="np-main-plan-section-plan__item-desc">бракосочетания</span>
          </div>
        </div>
      </div>

      <div className="np-main-plan-section-plan__block">
        <div className="np-main-plan-section-plan__item">
          <img src={Banquet} alt="Banquet" className="np-main-plan-section-plan__item-img" />
          <span className="np-main-plan-section-plan__item-title">15:30</span>

          <div className="np-main-plan-section-plan__item-desc-wrapper">
            <span className="np-main-plan-section-plan__item-desc">Банкет</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
