import React, { Component, PropTypes } from 'react';

export default class User extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <p>Hello, {name}</p>
      </div>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired
};
