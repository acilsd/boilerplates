import React, { Component } from 'react';
import Clock from '../Clock';
import Form from '../Form';
import Controls from '../Controls';

export default class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      status: 'stopped'
    };
    this.handleCountdown = this.handleCountdown.bind(this);
    this.handleStatusChanged = this.handleStatusChanged.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { status } = this.state;
    if (status !== prevState.status) {
      switch (status) {
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
      let newCount = this.state.count - 1;
      this.setState({ count: newCount >= 0 ? newCount : 0 });
      if (newCount === 0) this.setState({ status: 'stopped' });
    }, 1000);
  }

  handleCountdown(sec) {
    this.setState({ count: sec, status: 'started' });
  }

  handleStatusChanged(status) {
    this.setState({ status });
  }

  render() {
    const { count, status } = this.state;

    const renderControlArea = () => {
      if (status !== 'stopped') {
        return <Controls status={status} statusChange={this.handleStatusChanged} />;
      } else {
        return <Form onSetCountdown={this.handleCountdown} />;
      }
    };

    return (
      <div>
        <Clock time={count} />
        {renderControlArea()}
      </div>
    );
  }
}
