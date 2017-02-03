import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import styles from './style.scss';

class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    restoreSession: PropTypes.func.isRequired,
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  componentDidMount() {
    const sessionObject = JSON.parse(window.localStorage.getItem('user_task'));
    if (!sessionObject || sessionObject === null) return;
    this.props.restoreSession(sessionObject);
    this.context.router.push('/main');
  }

  handleLogIn = (e) => {
    e.preventDefault();
    this.props.login().then(() => {
      const status = this.props.isLoggedIn;
      if (status) this.context.router.push('/main');
    });
  }

  render() {
    return (
      <div class='login'>
        <div class='content'>
          <h1>Yet another todo-app</h1>
          <button onClick={this.handleLogIn}>Login with github</button>
          <a href='https://github.com/acilsd/stodo' target='_blank'>Sources</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.user.loggedIn
});

export default connect(mapStateToProps, actions)(Login);
