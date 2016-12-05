import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { closeModal } from './action';

class Modal extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    modal: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.cloe = this.close.bind(this);
  }

  close() {
    this.props.dispatch(closeModal());
  }

  render() {
    const { isOpen, title, content } = this.props.modal; //do not forget to import modal reducer as modal hehe

    if (!isOpen) { return null; }

    return (
      <div>
        <h2>{ title }</h2>
        <p>{ content }</p>
        <button onClick={ this.close }>Close</button>
      </div>
    );
  }
}

function mapStateToProps(state) {

}

export default connect(mapStateToProps)(Modal);
