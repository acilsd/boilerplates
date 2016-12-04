import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class Input extends Component {

  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    class: PropTypes.string,
    err: PropTypes.string
  }

  constructor(props) {
    super(props);
    const { value } = this.props;
    this.state = {
      value
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    this.props.onChange(value);
    this.setState({
      value
    });
  }

  render() {
  
    const { err, value } = this.props;

    const inputStl = classnames({
      'form-group': true,
      'has-error': err ? true : false
    });

    return (
      <div class={ inputStl }>
        <input
          type='text'
          value={value}
          onChange={this.handleChange}
        />
        { err ? <span>{err}</span> : null }
      </div>
    );
  }
}


/*
import input

method(val) {
this.setState({
  somevalue: val
})
}

<Input
  onChange={this.method}
  value={''}
/>

*/
