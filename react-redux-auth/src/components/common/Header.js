import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <li key={1} class="nav-item">
          <Link class="nav-link" to='/signout'>Sign out</Link>
          </li>
          );
    } else {
      return [
        <li key={2} class="nav-item">
          <Link class="nav-link" to='/signin'>Sign in</Link>
        </li>,
        <li key={3} class="nav-item">
          <Link class="nav-link" to='/signup'>Sign up</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav class="navbar navbar-light">
        <Link to='/' class="navbar-brand">Sample React-Redux Auth App</Link>
        <ul class="nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
