/*eslint no-console: "off"*/
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Admin from './components/Admin';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Login from './components/Login';
import requireAuthentication from './components/Authenticated';

export default (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/admin' component={requireAuthentication(Admin)} />
    </Route>
    <Route path='/login' component={Login} />
    <Route path='*' component={NotFound} />
  </div>
);
