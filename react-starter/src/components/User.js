import React, { Component, PropTypes } from 'react';

export default class User extends Component {
  render() {
    const { name, error } = this.props;
    let content = null;
    if(name) {
      content = (
        <p>Hello, user {name}!</p>
      );
    } else {
      content = (
        <button class="btn" onClick={this.props.handleLogin}>Log In</button>
      );
    }

    return (
      <div>
        {content}
        {
          error
          ?
            <p>
              {error}
              <br />
              Oops!, try again plz
            </p>
          :
          null
        }
      </div>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired
};
