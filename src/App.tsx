import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import Routes from 'routes/Routes';

import { useTheme } from 'hooks/useTheme';

import 'assets/styles/common.scss';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  const { themeConfig, initTheme } = useTheme();

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  return (
    <ParallaxProvider>
      <ConfigProvider theme={themeConfig}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ConfigProvider>
    </ParallaxProvider>
  );
}

export default App;
