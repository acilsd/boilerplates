import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { NavLink } from '../Links';
import * as actions from '../../actions';
import styles from './style.scss';

class Search extends Component {
  static propTypes = {
    searchTodo: PropTypes.func.isRequired,
    filterDone: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const searchText = this._text.value.trim().toLowerCase();
    this.props.searchTodo(searchText);
  };

  handleCheck = (e) => {
    const checked = this._check.checked;
    this.props.filterDone(checked);
  }

  reset = (e) => {
    this._text.value = '';
    this._text.focus();
    this.props.searchTodo('');
  }

  handleLogOut = (e) => {
    e.preventDefault();
    this.props.logout().then(() => {
      this.context.router.push('/');
    });
  }

  render() {
    let text = this.props.filtered ? 'completed' : 'all';
    return (
      <div class='top'>
        <form onSubmit={this.handleSubmit} class='search-form'>
          <div class='top__left'>
            <div class='search-group'>
              <input type='text' ref={c => this._text = c}
                placeholder='search by name'
                class='search-form__input'/>
              <div class='search-group__actions'>
                <button onClick={this.handleSubmit} class='btn'>Submit</button>
                <button onClick={this.reset} class='btn btn--red'>Reset</button>
              </div>
            </div>
            <input type='checkbox' ref={c => this._check = c}
              onChange={this.handleCheck}
              class='search-form__check'
              id='check'
            />
            <label for='check' class='search-form__label'>
              Filter by status: <b>{`${text}`}</b>
            </label>
          </div>

          <button onClick={this.handleLogOut} class='lgt'>Logout</button>

        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filtered: state.todo.filtered,
  isLoggedIn: state.user.loggedIn
});

export default connect(mapStateToProps, actions)(Search);
