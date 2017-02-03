import React, { Component, PropTypes } from 'react';
import styles from './style.scss';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    //this.formatSeconds = this.formatSeconds.bind(this);
  }

  static defaultProps  = {
    time: 0
  }

  static propTypes = {
    time: React.PropTypes.number
  }

  formatSeconds(time) {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);

    if (seconds < 10) { seconds = '0' + seconds; }

    if (minutes < 10) { minutes = '0' + minutes; }

    return `${minutes}:${seconds}`;
  }

  render() {
    const { time } = this.props;
    return (
      <div class="clock">
        <span class="clock-text">
          { this.formatSeconds(time) }
        </span>
      </div>
    );
  }
}
