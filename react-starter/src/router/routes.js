import React from 'react';
import { Route } from 'react-router-dom';

import Countdown from '../components/Countdown';
import Timer from '../components/Timer';

const AppRoutes = () => {
  return (
    <div>
      <Route exact path='/' component={Countdown}/>
      <Route path='/timer' component={Timer}/>
    </div>
  );
};

export default AppRoutes;
