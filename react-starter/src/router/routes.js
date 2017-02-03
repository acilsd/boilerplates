import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Login from '../components/Login';
import Main from '../components/Main/';
import Add from '../components/Add/';
import ErrorPage from '../components/Error';

import ProtectedRoute from './redirect';

const AppRoutes = ({isLoggedIn}) => {
  return (
    <Switch>
      <Route exact path='/' component={Login}/>
      <ProtectedRoute path='/main' status={isLoggedIn} component={Main} />
      <ProtectedRoute path='/add' status={isLoggedIn} component={Add} />
      <Route component={ErrorPage}/>
    </Switch>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.user.loggedIn
});

export default connect(mapStateToProps, actions)(AppRoutes);
