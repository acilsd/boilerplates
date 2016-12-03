import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import { Router, browserHistory } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';
import App from './components/App/';
import styles from './style/custom.css';
//import routes from './routes';

const store = configureStore();

// const history = syncHistoryWithStore(browserHistory, store);

const container = document.getElementById('container');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);


// render(
//   <Provider store={store}>
//     <Router history={history} routes={routes}/>
//   </Provider>,
//   container
// );
