import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import * as actions from '../../actions';
import { checkValidity } from '../../utils';
import styles from './style.scss';

class Add extends Component {
  static propTypes = {
    addToFirebase: PropTypes.func.isRequired,
    todo: PropTypes.array.isRequired,
    errors: PropTypes.object.isRequired,
    validateThis: PropTypes.func.isRequired,
    deValidate: PropTypes.func.isRequired,
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: this.name.value.trim(),
      text: this.text.value.trim(),
      time: this.time.value.trim(),
      note: this.note.value.trim(),
    };
    const uid = this.props.uid;
    const valid = checkValidity(data, this.props.validateThis);
    if (valid) {
      this.props.addToFirebase(data, uid);
      this.context.router.push('/main');
      this.props.deValidate();
    }
  };

  revert = (e) => {
    e.preventDefault();
    this.props.deValidate();
    this.context.router.push('/main');
  }

  render() {
    const { noName, noText } = this.props.errors;
    const nameErr = classNames({invalid: !noName});
    const textErr = classNames({invalid: !noText});
    return (
      <form onSubmit={this.handleSubmit} class='modal-form'>
        <h1>Adding new task...</h1>
        <p>Please fill in this form :3</p>
        <div class='inputs'>
          <input
            class={`modal-input ${nameErr}`} type='text'
            ref={c => this.name = c}
            placeholder='task name (required!)'
            onChange={() => this.props.deValidate()}
          />
          <input class='modal-input' type='text' ref={c => this.time = c} placeholder='desired limits'/>
          <input class='modal-input' type='text' ref={c => this.note = c} placeholder='special notes'/>
        </div>
        <textarea
          class={`modal-text ${textErr}`}
          ref={c => this.text = c}
          onChange={() => this.props.deValidate()}
          placeholder='enter your task text here (required!)'
        />
        <div class='buttons'>
          <button class='btn' type='submit'>Submit</button>
          <button class='btn btn--red' onClick={this.revert}>Cancel</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo.todos,
  uid: state.user.uid,
  errors: state.todo.errors
});

export default connect(mapStateToProps, actions)(Add);
