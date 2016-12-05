import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openModal } from '.action';

class Init extends Component {
  edit() {
    this.props.dispatch(openModal({
      content: <div>HAI</div>,
      title: 'EDIT',
      btn: 'CONFIRM'
    }));
  }
  cancel() {

  }
  render() {

    return (
      <div>
        <button onClick={this.edit.bind(this)}>Yes</button>
        <button onClick={this.cancel.bind(this)}>No</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Init);
