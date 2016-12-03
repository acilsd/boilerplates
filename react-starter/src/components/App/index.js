import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../Header/';
import MainSection from '../MainSection/';
import * as TodoActions from '../../actions';
import { DevTools } from '../../utils/index';

const App = ({todos, actions}) => (
  <div>
    <Header addTodo={actions.addTodo} />
    <MainSection todos={todos} actions={actions} />
    { process.env.NODE_ENV !== 'production' ? <DevTools/> : null }
  </div>
);

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
