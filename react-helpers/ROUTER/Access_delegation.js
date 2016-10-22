/*eslint-disable*/
// NOTE: LOGIN COMPONENT
export default class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const login = e.target.elements[0].value;
    window.localStorage.setItem('rr_login', login); //store session in localStorage
    // check if login is admin
    if (login === 'admin') { this.context.router.push('/admin'); }
    //else redirect to mainpage
    else { this.context.router.push('/'); }
  }

  render() {
    return (
      <div>
        <h2>Please enter your Login name</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="your name"/>
          <button>Login</button>
        </form>
      </div>
    );
  }
}

Login.contextTypes = {
  router: PropTypes.object.isRequired
};

// NOTE: ADMIN PAGE

export default class Admin extends Component {
  //if no admin = redirect to mainpage
  static onEnter(nextState, replace) {
    const login = window.localStorage.getItem('rr_login');
    if (login !== 'admin') { replace ('/'); }
  }

  render() {
    return (
      <div>
        <h3>ADMIN PAGE</h3>
      </div>
    );
  }
}

// NOTE: ROUTES

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Admin from './components/Admin';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Login from './components/Login';

export default (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/admin' component={Admin} onEnter={Admin.onEnter}/>
    </Route>
    <Route path='/login' component={Login} />
    <Route path='*' component={NotFound} />
  </div>
);
