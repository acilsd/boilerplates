import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

export default class SignUp extends Component {
  handleFormSubmit(formProps) {
    this.props.signUpUser(formProps);
  }
  renderError() {
    if (this.props.errorMessage) {
      return (
        <div class="alert alert-danger">
          <strong>Error: {this.props.errorMessage}</strong>
        </div>
      );
    }
  }
  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset class="form-group">
          <label>Email:</label>
          <input class="form-control" {...email}/>
          {
            email.touched && email.error && <div class="error">{email.error}</div>
          }
        </fieldset>
        <fieldset class="form-group">
          <label>Password:</label>
          <input class="form-control" type="password"{...password}/>
          {
            password.touched && password.error && <div class="error">{password.error}</div>
          }
        </fieldset>
        <fieldset class="form-group">
          <label>Confirm password:</label>
          <input class="form-control" type="password"{...passwordConfirm}/>
          {
            passwordConfirm.touched && passwordConfirm.error && <div class="error">{passwordConfirm.error}</div>
          }
        </fieldset>
        {this.renderError()}
        <button action='submit' class="btn btn-primary">Sign up</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

function validate(formProps) {
  const errors = {};
  if (!formProps.email) {
    errors.email = 'Please enter your email';
  }
  if (!formProps.password) {
    errors.password = 'Please enter your password';
  }
  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please confirm your password';
  }
  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords do not match';
  }
  return errors;
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(SignUp);
