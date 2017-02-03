import React from 'react';
import { NavLink } from '../Links';
import styles from './style.scss';

const NavBar = () => {
  return (
    <div class='top-bar'>
      <div class='top-bar-left'>
        <ul class='menu'>
          <li class='menu-text'>RANDOM LOGO</li>
          <li><NavLink to='/'>Countdown</NavLink></li>
          <li><NavLink to='/timer'>Timer</NavLink></li>
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
