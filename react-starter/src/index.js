import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './App';

const store = configureStore();

const container = document.querySelector('.container');

render(
  <Provider store={store}>
    <div class="app">
      <App/>
    </div>
  </Provider>, container);
