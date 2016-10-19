import React, { PropTypes, Component } from 'react';
import TodoTextInput from '../TextInput/';

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className="header">
        <h1>Todo list</h1>
        <h2>(react-redux boilerplate)</h2>
        <h3>demo-app build with <a href="http://todomvc.com/" target="_blank">todomvc.com</a> help</h3>
        <TodoTextInput newTodo
          onSave={this.handleSave}
          placeholder="What should i do?.." />
      </header>
    );
  }
}
