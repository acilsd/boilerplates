import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';

// import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';
import App from './components/App/';
import styles from './style/custom.css';

const store = configureStore();

// const history = syncHistoryWithStore(browserHistory, store);

const container = document.getElementById('container');

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  container
);
