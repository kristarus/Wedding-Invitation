import React from 'react';

import './Map.styles.scss';

const Map = () => {
  const src =
    'https://yandex.ru/map-widget/v1/?um=constructor%3A5565890438827386c789d6dfa7c52b3b466338c1977f4d7aeecfa7f12925cafa&amp;source=constructor';

  return <iframe src={src} className="np-main-location-map" />;
};

export default Map;
