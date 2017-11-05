// NOTE: placeholder, this app is not working atm
/* @flow */
import 'react-hot-loader/patch';
import 'babel-polyfill';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import foundation from 'foundation-sites/dist/css/foundation.min.css';

import App from './components/App';

const container = document.getElementById('container');

const render = (Component: React.StatelessFunctionalComponent<*>) => {
  ReactDOM.render(
    <AppContainer>
      <Router>
        <App />
      </Router>
    </AppContainer>,
    container
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
