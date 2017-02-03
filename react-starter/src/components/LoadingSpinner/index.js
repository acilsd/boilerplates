import React from 'react';
import styles from './style.scss';

const LoadingSpinner = ({ isLoading }) => {
  return (
    isLoading
    ? (
      <div className="loading-spinner">
        <i className="fa fa-spinner fa-spin"></i>
      </div>
    ) :
    null
  );
};

LoadingSpinner.propTypes = {
  isLoading: React.PropTypes.bool.isRequired
};

export default LoadingSpinner;
