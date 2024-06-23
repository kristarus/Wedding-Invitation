import React from 'react';

import './InvitationHeader.styles.scss';

const InvitationHeader = () => {
  return (
    <div className="np-main-invitation-header">
      <div className="np-main-invitation-header__title-wrapper">
        <span className="np-main-invitation-header__title">Дорогие</span>
        <span className="np-main-invitation-header__title">родные и друзья!</span>
      </div>

      <div className="np-main-invitation-header__desc-wrapper">
        <span className="np-main-invitation-header__desc">В нашей жизни предстоят счастливые перемены!</span>
        <span className="np-main-invitation-header__desc">
          Мы хотим, чтобы в этот день рядом с нами были самые близкие и дорогие для нас люди.
        </span>
        <span className="np-main-invitation-header__desc">
          Приглашаем присоединиться к торжеству, посвещённому дню нашей свадьбы, и украсить его своим присутствием!
        </span>
      </div>
    </div>
  );
};

export default InvitationHeader;
