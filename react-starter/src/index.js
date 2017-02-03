import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';
import App from './components/App/';

const store = configureStore();

// const history = syncHistoryWithStore(browserHistory, store);

const container = document.getElementById('container');

render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  container
);
