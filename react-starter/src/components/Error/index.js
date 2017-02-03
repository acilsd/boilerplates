import React from 'react';
import Spinner from '../LoadingSpinner';
import styles from './style.scss';

const ErrorPage = () => {
  return (
    <div class='err'>
      <h2>Oooops</h2>
      <p>This page does not exist</p>
      <Spinner />
    </div>
  );
};

export default ErrorPage;
