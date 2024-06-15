import React from 'react';

import './LocationHeader.styles.scss';

const LocationHeader = () => {
  return (
    <div className="np-main-location-header">
      <span className="np-main-location-header__title">Место проведения</span>

      <div className="np-main-location-header__desc-wrapper">
        <span className="np-main-location-header__desc">Наш праздник пройдёт в ресторане</span>

        <span className="np-main-location-header__desc accent">
          &quot;Astoria Riverside&quot;, зал &quot;Garder of Eden&quot;
        </span>

        <span className="np-main-location-header__desc">по адресу пр. Победителей, 116</span>
      </div>
    </div>
  );
};

export default LocationHeader;
