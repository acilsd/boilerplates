import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';
import App from './components/app';
import reducers from './reducers';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);
const container = document.querySelector('.container');

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, container);
