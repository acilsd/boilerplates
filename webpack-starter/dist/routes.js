import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={AnotherComponent}/>
    <Route path='add' component={OneAnotherComponent} />
  </Route>
);
