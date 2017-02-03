import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { checkValidity } from '../../utils';
import * as actions from '../../actions';
import style from './style.scss';

class ModalEdit extends PureComponent {
  static propTypes = {
    editInFirebase: PropTypes.func.isRequired,
    hideAllModals: PropTypes.func.isRequired,
    editing: PropTypes.bool.isRequired,
    tempTodo: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    uid: PropTypes.string.isRequired,
    validateThis: PropTypes.func.isRequired,
    deValidate: PropTypes.func.isRequired,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const toEdit = this.collectValues();
    const uid = this.props.uid;

    const valid = checkValidity(toEdit, this.props.validateThis);
    if (valid) {
      this.props.editInFirebase(toEdit, uid);
      this.props.hideAllModals();
      this.props.deValidate();
    }
  }

  collectValues = () => {
    const { completed, id } = this.props.tempTodo;
    const box = {
      completed,
      id,
      name: this.name.value.trim(),
      note: this.note.value.trim(),
      text: this.text.value.trim(),
      time: this.time.value.trim()
    };
    return box;
  }

  reset = (e) => {
    this.name.value = '';
    this.note.value = '';
    this.time.value = '';
    this.text.value = '';
  }

  hide = (e) => {
    e.preventDefault();
    this.props.hideAllModals();
    this.props.deValidate();
  }

  render() {
    const { editing, tempTodo } = this.props;
    const { noName, noText } = this.props.errors;
    const nameErr = classNames({invalid: !noName});
    const textErr = classNames({invalid: !noText});

    return (
        editing ? (
          <div class='modal-container'>
            <form onSubmit={this.handleSubmit} class='modal-edit'>
              <h3 class='modal-title'>Currently editing task: {tempTodo.name}</h3>
              <div class='edit-inputs'>
                <input
                  class={`edit-input ${nameErr}`}
                  type='text'
                  placeholder='task name (required)'
                  defaultValue={tempTodo.name}
                  ref={c => this.name = c}
                  onChange={() => this.props.deValidate()}/>
                <input
                  class='edit-input'
                  type='text'
                  placeholder='task time'
                  defaultValue={tempTodo.time}
                  ref={c => this.time = c} />
                <input
                  class='edit-input'
                  type='text'
                  placeholder='task note'
                  defaultValue={tempTodo.note}
                  ref={c => this.note = c} />
              </div>
              <textarea class={`edit-text ${textErr}`}
                placeholder='enter your task text here (required)'
                defaultValue={tempTodo.text}
                ref={c => this.text = c}
                onChange={() => this.props.deValidate()}
              />
              <div class='edit-buttons'>
                <button class='btn-edit' type='submit'>Submit</button>
                <button class='btn-edit btn-edit--red' onClick={this.hide}>Cancel</button>
              </div>
            </form>
            <div class='edit-buttons'>
              <button class='reset-button' onClick={this.reset}>Clear all</button>
            </div>
          </div>
        ) : null
    );
  }
}

const mapStateToProps = state => ({
  editing: state.modals.editing,
  tempTodo: state.modals.tempTodo,
  uid: state.user.uid,
  errors: state.todo.errors
});

export default connect(mapStateToProps, actions)(ModalEdit);
