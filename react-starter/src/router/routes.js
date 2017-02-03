import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Countdown from '../components/Countdown';
import Timer from '../components/Timer';
import ErrorPage from '../components/Error';

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Countdown}/>
      <Route path='/timer' component={Timer}/>
      <Route component={ErrorPage}/>
    </Switch>
  );
};

export default AppRoutes;
