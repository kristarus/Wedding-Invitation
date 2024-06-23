import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import { Button } from 'components';
import Divider from 'assets/images/divider.png';

import './Details.styles.scss';

const Details = () => {
  return (
    <div className="np-main-details-section-details">
      <ScrollAnimation animateOnce animateIn="fadeIn">
        <div className="np-main-details-section-details__divider-wrapper flip-y">
          <img src={Divider} className="np-main-details-section-details__divider" />
          <img src={Divider} className="np-main-details-section-details__divider flip" />
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateOnce animateIn="fadeIn">
        <div className="np-main-details-section-details__item">
          <span className="np-main-details-section-details__item-title">Дресскод</span>
          <span className="np-main-details-section-details__item-desc">
            Форма одежды торжественная. Дам просим по возможности избегать в нарядах чёрных и белых цветов. Для
            джентльменов уместным будет классический костюм.
          </span>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateOnce animateIn="fadeIn">
        <div className="np-main-details-section-details__item">
          <span className="np-main-details-section-details__item-title">Дети</span>
          <span className="np-main-details-section-details__item-desc">
            Мы любим детей и в будущем тоже планируем стать родителями, но, к сожалению, формат нашего торжества не
            предполагает присутствие маленьких гостей. Поэтому просим оставить ваших малышей в надежных руках на день
            торжества.
          </span>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateOnce animateIn="fadeIn">
        <div className="np-main-details-section-details__item">
          <span className="np-main-details-section-details__item-title">Подарки</span>
          <span className="np-main-details-section-details__item-desc">
            Чтобы наши руки были свободны для объятий, будем рады легким подаркам в конвертах.
          </span>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateOnce animateIn="fadeIn">
        <div className="np-main-details-section-details__item">
          <span className="np-main-details-section-details__item-title">Контакты</span>
          <span className="np-main-details-section-details__item-desc">
            По всем интересующим вас вопросам можете обращайться к нашему свадебному организатору Виктории:
          </span>

          <Link to="tel:+375291900920">
            <Button size="small" className="np-main-details-section-details__item-btn">
              +375 (29) 190 09 20
            </Button>
          </Link>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateOnce animateIn="fadeIn">
        <div className="np-main-details-section-details__divider-wrapper">
          <img src={Divider} className="np-main-details-section-details__divider" />
          <img src={Divider} className="np-main-details-section-details__divider flip" />
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Details;
