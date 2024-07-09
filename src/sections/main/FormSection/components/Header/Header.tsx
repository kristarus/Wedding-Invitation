import React from 'react';

import './Header.styles.scss';

const Header = () => {
  return (
    <div className="np-main-form-header">
      <div className="np-main-form-header__title-wrapper">
        <span className="np-main-form-header__title">Анкета</span>
      </div>

      <div className="np-main-form-header__desc-wrapper">
        <span className="np-main-form-header__desc">
          Пожалуйста, чтобы всё прошло идеально, ответьте на несколько вопросов в анкете
        </span>
        {/* <span className="np-main-form-header__desc">
          Просьба заполнить данную анкету до <span className="np-main-form-header__desc accent">10 июля</span>
        </span> */}
      </div>
    </div>
  );
};

export default Header;
