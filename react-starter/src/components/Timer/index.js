import React, { Component } from 'react';
import Clock from '../Clock';
import Form from '../Form';
import Controls from '../Controls';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      status: 'stopped'
    };
    this.handleStatusChanged = this.handleStatusChanged.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.status !== prevState.status) {
      switch (this.state.status) {
      case 'started':
        this.start();
        break;
      case 'stopped':
        this.setState({ count: 0 });
      case 'paused':
        clearInterval(this.timer);
        this.timer = undefined;
        break;
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  start() {
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  handleStatusChanged(status) {
    this.setState({ status });
  }

  render() {
    const { count, status } = this.state;

    return (
      <div>
        <Clock time={count} />
        <Controls status={status} statusChange={this.handleStatusChanged}/>
      </div>
    );
  }
}
