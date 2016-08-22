import React, { Component, PropTypes } from 'react';

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.props.getPhotos(+e.target.textContent);
  }
  render() {
    const { year, photos, fetching } = this.props;
    return (
      <div>
        <p>
          <button onClick={this.handleClick}>2016</button>
          <button onClick={this.handleClick}>2015</button>
          <button onClick={this.handleClick}>2014</button>
        </p>
        <h3>{year} Year</h3>
        {
          fetching ?
            <p>Loading...</p>
          :
            <p>You have {photos.length} photos</p>
        }
      </div>
    );
  }
}

Page.propTypes = {
  photos: PropTypes.array.isRequired,
  year: PropTypes.number.isRequired,
  getPhotos: PropTypes.func.isRequired
};
