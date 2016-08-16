import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/App';
import SignIn from './components/auth/SignIn';
import SignOut from './components/auth/SignOut';
import SignUp from './components/auth/SignUp';
import RequireAuth from './components/auth/RequireAuth';
import Feature from './components/Feature';
import Welcome from './components/common/Welcome';
import reducers from './reducers';
import { AUTH_USER } from './actions/constants';
import style from './style/custom.css';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const container = document.querySelector('.container');
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');

if(token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Welcome}/>
        <Route path='signin' component={SignIn}/>
        <Route path='signout' component={SignOut}/>
        <Route path='signup' component={SignUp}/>
        <Route path='feature' component={RequireAuth(Feature)}/>
      </Route>
    </Router>
  </Provider>, container);
