import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class SignIn extends Component {
  handleFormSubmit({email, password}) {
    this.props.signInUser({ email, password });
  }
  renderError() {
    if (this.props.errorMessage) {
      return (
        <div class="alert alert-danger">
          <strong>Wrong login and/or password, please try again</strong>
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: {email, password} } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset class="form-group">
          <label>Email:</label>
          <input class="form-control" {...email}/>
        </fieldset>
        <fieldset class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" {...password}/>
        </fieldset>
        {this.renderError()}
        <button action='submit' class="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(SignIn);
