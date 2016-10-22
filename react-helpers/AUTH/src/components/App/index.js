import React, { Component } from 'react';
import NavLink from '../NavLink/';

export default class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><NavLink to='/admin'>Админка</NavLink></li>
          <li><NavLink to='/login'>Войти</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
