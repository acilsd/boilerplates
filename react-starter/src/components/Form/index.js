import React, { Component, PropTypes } from 'react';
import styles from './style.scss';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    onSetCountdown: React.PropTypes.func.isRequired
  }

  handleSubmit(e) {
    e.preventDefault();
    const seconds = this.refs.seconds.value;

    if (seconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(seconds, 10));
    }
  }

  render() {
    return (
      <div>
        <form ref='form' onSubmit={this.handleSubmit} class='countdown-form'>
          <input ref='seconds' type='text' placeholder='enter time in seconds'/>
          <button class='button expanded'>start</button>
        </form>
      </div>
    );
  }
}
