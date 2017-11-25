/* @flow */
import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

type TArgs = {
  component: any,
  isLoggedIn: boolean,
  rest?: {},
  location?: Location
};

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }: TArgs): React.Element<*> => (
  <Route {...rest} render={(props: TArgs): React.Element<*> => {
    return (
      isLoggedIn
        ? <Component from={props.location} {...props}/>
        : <Redirect to={{pathname: '/', state: { from: props.location }}}/>
    );
  }}/>
);

import First from './HelloWorld/First';
import Protected from './HelloWorld/Protected';
import Empty from './HelloWorld/Empty';

const MountPoint = (props: { isLoggedIn: boolean }): React.Element<*> => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={First}/>
        <PrivateRoute path='/protected' isLoggedIn={props.isLoggedIn} component={Protected}/>
        <Route component={Empty}/>
      </Switch>
    </BrowserRouter>
  );
};

import { connect } from 'react-redux';
import type { RootState } from 'helpers/types';

const mapStateToProps = (state: RootState): { isLoggedIn: boolean } => {
  return {
    isLoggedIn: state.hello_world.isLoggedIn,
  };
};

export default connect(mapStateToProps, null)(MountPoint);
