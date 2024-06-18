import React from 'react';

import Divider from 'assets/images/divider.png';

import './Details.styles.scss';

const Details = () => {
  return (
    <div className="np-main-details-section-details">
      <div className="np-main-details-section-details__divider-wrapper flip-y">
        <img src={Divider} className="np-main-details-section-details__divider" />
        <img src={Divider} className="np-main-details-section-details__divider flip" />
      </div>

      <div className="np-main-details-section-details__item">
        <span className="np-main-details-section-details__item-title">Дресскод</span>
        <span className="np-main-details-section-details__item-desc">
          Форма одежды торжественная. Дам просим по возможности избегать в нарядах чёрных и белых цветов. Для
          джентльменов уместным будет классический костюм.
        </span>
      </div>

      <div className="np-main-details-section-details__item">
        <span className="np-main-details-section-details__item-title">Дети</span>
        <span className="np-main-details-section-details__item-desc">
          Мы любим детей и в будущем тоже планируем стать родителями, но, к сожалению, формат нашего торжества не
          предполагает присутствие маленьких гостей. Поэтому просим оставить ваших малышей в надежных руках на день
          торжества.
        </span>
      </div>

      <div className="np-main-details-section-details__item">
        <span className="np-main-details-section-details__item-title">Подарки</span>
        <span className="np-main-details-section-details__item-desc">
          Если вы желаете поздравить нас по случаю праздника, мы будем благодарны денежным подаркам и обещаем найти им
          самое лучшее применение.
        </span>
      </div>

      <div className="np-main-details-section-details__item">
        <span className="np-main-details-section-details__item-title">Контакты</span>
        <span className="np-main-details-section-details__item-desc">
          По всем интересующим вас вопросам можете обращайться к нашему свадебному организатору Виктории:
        </span>
      </div>

      <div className="np-main-details-section-details__divider-wrapper">
        <img src={Divider} className="np-main-details-section-details__divider" />
        <img src={Divider} className="np-main-details-section-details__divider flip" />
      </div>
    </div>
  );
};

export default Details;
