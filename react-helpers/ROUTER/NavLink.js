// NOTE: navlink helper (react-router)

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavLink extends Component {
  render() {
    return <Link {...this.props} activeClassName='active'/>;
  }
}

/*

import React, { Component } from 'react';
import NavLink from '../NavLink/';

export default class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><NavLink to='/home'>HomePage</NavLink></li>
          <li><NavLink to='/blabhlah'>Whatever</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

*/
