import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import styles from './styles.scss';

class ModalDelete extends Component {

  static propTypes = {
    tempTodo: PropTypes.object.isRequired,
    deleting: PropTypes.bool.isRequired,
    deleteFromFirebase: PropTypes.func.isRequired,
    hideAllModals: PropTypes.func.isRequired,
  }

  handleDelete = () => {
    this.props.deleteFromFirebase(this.props.uid, this.props.tempTodo.id);
    this.props.hideAllModals();
  }

  render() {
    const { deleting, tempTodo, hideAllModals } = this.props;
    return (
        deleting ? (
          <div class='modal modal--delete'>
            <h3 class='modal__title'>Are you sure you want to delete this task?</h3>
            <p>Task name: <b>{tempTodo.name}</b></p>
            <button class='btn' onClick={hideAllModals}>no</button>
            <button class='btn btn--red' onClick={this.handleDelete}>yes</button>
          </div>
        ) : null
    );
  }
}

const mapStateToProps = state => ({
  deleting: state.modals.deleting,
  tempTodo: state.modals.tempTodo,
  uid: state.user.uid
});

export default connect(mapStateToProps, actions)(ModalDelete);
