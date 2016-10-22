import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Login extends Component {

  handleSubmit(e) {
    e.preventDefault();    
    this.props.login({name: e.target.elements[0].value});
  }

  render() {
    return (
      <div>
        <h2>Please enter your Login name</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="your name"/>
          <button>Login</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, actions)(Login);
