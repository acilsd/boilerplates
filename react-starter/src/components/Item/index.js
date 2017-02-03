import React, { PureComponent , PropTypes } from 'react';

import styles from './style.scss';

export default class Item extends PureComponent  {
  static propTypes = {
    toggler: PropTypes.func.isRequired,
    deleter: PropTypes.func.isRequired,
    editor: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    uid: PropTypes.string.isRequired,
  }

  handleToggle = () => {
    const status = !this.props.completed;
    this.props.toggler(this.props.id, status, this.props.uid);
  };

  toggleEdit = () => {
    const box = {
      completed: this.props.completed,
      id: this.props.id,
      name: this.props.name,
      text: this.props.text,
      note: this.props.note,
      time: this.props.time
    };
    this.props.editor(box);
  };

  handleDelete = () => {
    const box = {
      id: this.props.id,
      name: this.props.name
    };
    this.props.deleter(box);
  };

  render() {
    const { name, text, time, note, completed } = this.props;
    return (
      <div class='todo'>
        <h2 class='todo__title'>Task: <b>{name}</b></h2>
        <p class='todo__text'>{text}</p>
        <div class='todo__description'>
          <span class='todo__item'><span>Current status:</span><b>{completed ? 'Done' : 'In process'}</b></span>
          <span class='todo__item'><span>Time limit:</span><b>{time || 'no'}</b></span>
          <span class='todo__item'><span>Special note:</span><b>{note || 'no'}</b></span>
        </div>
        <div class='todo__actions'>
          <button class='btn-td btn-td--pink' onClick={this.handleToggle}>{completed ? 'Uncomplete' : 'Complete?'}</button>
          <button class='btn-td' onClick={this.toggleEdit}>Edit</button>
          <button class='btn-td btn-td--red' onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
}
