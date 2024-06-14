import { useState, useEffect } from 'react';

const DEFAULT_MAX_WIDTH = 1000;

const useWindowResponsiveness = (widthThreshold = DEFAULT_MAX_WIDTH) => {
  const [state, setState] = useState({ isMobileView: false });

  useEffect(() => {
    const setResponsiveness = () => {
      return window.screen.availWidth < widthThreshold
        ? setState(prevState => ({ ...prevState, isMobileView: true }))
        : setState(prevState => ({ ...prevState, isMobileView: false }));
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());

    return () => window.removeEventListener('resize', () => setResponsiveness());
  }, [widthThreshold]);

  return state;
};

export default useWindowResponsiveness;
