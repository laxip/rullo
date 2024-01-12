import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Rullo from './Rullo';
import About from './Rullo/About';
import HowToPlay from './Rullo/HowToPlay';
import { store } from './store';
import GlobalStyle from './theme/GlobalStyle';
import theme from './theme/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Rullo />}>
              <Route index />
              <Route path="about" element={<About />} />
              <Route path="how-to-play" element={<HowToPlay />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
