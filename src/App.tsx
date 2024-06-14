import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import Routes from 'routes/Routes';

import { useTheme } from 'hooks/useTheme';
import { setScreenSizeUnit } from 'utils/screenSize';

import 'assets/styles/common.scss';

function App() {
  const { themeConfig, initTheme } = useTheme();

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  useEffect(function () {
    window.addEventListener('resize', setScreenSizeUnit);

    return function cleanup() {
      window.removeEventListener('resize', setScreenSizeUnit);
    };
  }, []);

  return (
    <ConfigProvider theme={themeConfig}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
