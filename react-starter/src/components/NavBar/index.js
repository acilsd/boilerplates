import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.scss';

const NavBar = () => {
  return (
    <div class='top-bar'>
      <div class='top-bar-left'>
        <ul class='menu'>
          <li class='menu-text'>RANDOM LOGO</li>
          <li><Link to='/'>Countdown</Link></li>
          <li><Link to='/timer'>Timer</Link></li>
        </ul>
      </div>
      <div class='top-bar-right'>
        <ul class='menu'>
          <li class='menu-text'>lorem ipsum copyright</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
