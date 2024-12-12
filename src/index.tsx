import React from 'react';
import ReactDOM from 'react-dom/client';

import 'normalize.css';
import './assets/css/index.less';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import theme from '@/assets/theme/index';

import store from './store';
import App from '@/App';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <HashRouter>
          <App />
        </HashRouter>
      </React.StrictMode>
    </ThemeProvider>
  </Provider>
);
