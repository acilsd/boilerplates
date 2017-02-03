import React from 'react';
import { NavLink } from '../Links';

import styles from './style.scss';

const ErrorPage = () => {
  return (
    <div class='err'>
      <h2>Oooops</h2>
      <p>This page does not exist</p>
      <NavLink class='new-task' to='/main'>Back to main page</NavLink>
    </div>
  );
};

export default ErrorPage;
