/* @flow */
import 'babel-polyfill';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
/*
  global styles
*/
import inject from './helpers/global';
inject();
/*
  store
*/
import configureStore from './reduxStore';
const store = configureStore();
/*
  entry point
*/
import MountPoint from './MountPoint';

const container: any = document.getElementById('container');

const render = (Component: React.StatelessFunctionalComponent<*>) => {
  ReactDOM.render(
    <AppContainer warnings={false}>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    container
  );
};

render(MountPoint);
/*
  hotreload
*/
if (module.hot) {
  module.hot.accept('./MountPoint', () => {
    const MountPoint = require('./MountPoint').default;
    render(MountPoint);
  });
}
