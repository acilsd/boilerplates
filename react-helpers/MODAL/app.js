import React, { Component, PropTypes } from 'react';
import Modal from './index';
import Header from '..';
import Footer from '..';

export default class App extends Component {

  render() {
    return (
      <div>
        <Modal />
        <Header />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}
