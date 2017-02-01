import React from 'react';
import { Redirect, Match } from 'react-router';

const ProtectedRoute = ({ component: Component, status, ...rest }) => (
  <Match {...rest} render={props => (
    status ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/'
      }}/>
    )
  )}/>
);

export default ProtectedRoute;
