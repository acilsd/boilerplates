import React, { Component, PropTypes } from 'react';

export default class Page extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const value = e.target.elements[0].value.toLowerCase();
    this.context.router.push(`/somepage/${value}`);
  }

  render() {
    return (
      <div>
        <div> TITLE </div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="your value" />
          <button type="submit">REDIRECT TO</button>
        </form>
      </div>
    );
  }
}

Page.contextTypes = {
  router: PropTypes.object.isRequired
};
