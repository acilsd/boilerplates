import React, { Component, PropTypes } from 'react';

export default class Home extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const value = e.target.elements[0].value.toLowerCase();
    this.context.router.push(`/genre/${value}`);
  }

  componentDidMount() {
    this.context.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
  }

  routerWillLeave() {
    let answer = window.confirm('Вы уверены?');
    if (!answer) return false;
  }

  render() {
    return (
      <div>
        <div>Раздел /</div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="genreName" />
          <button type="submit">Перейти</button>
        </form>
      </div>
    );
  }
}

Home.contextTypes = {
  router: PropTypes.object.isRequired
};
