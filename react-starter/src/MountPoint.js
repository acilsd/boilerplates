/* @flow */
import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const MountPoint = (): React.Element<*> => {
  return (
    <BrowserRouter>
      <Switch>
        <div>Hello world</div>
        {/* <Route exact path='/' component={Auth}/>
          <PrivateRoute path='/home' isLoggedIn={props.isLoggedIn} component={UserBlock}/>
          <PrivateRoute path='/trixie' isLoggedIn={props.isLoggedIn} component={Trixie}/>
          <PrivateRoute path='/wiki' isLoggedIn={props.isLoggedIn} component={Wiki}/>
        <Route component={ErrorPage}/> */}
      </Switch>
    </BrowserRouter>
  );
};

export default MountPoint;
