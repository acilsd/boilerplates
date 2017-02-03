import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component, status, ...rest }) => (
  <Route {...rest} render={props => (
    status ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/'
      }}/>
    )
  )}/>
);

export default ProtectedRoute;
