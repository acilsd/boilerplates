import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import Sample from './components/Somewhere';


export default (
  <Route path='/' component={App}>
    <Route path='/' component={Sample}/>
  </Route>
);
