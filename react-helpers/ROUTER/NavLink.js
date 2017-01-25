// NOTE: navlink helper (react-router)

import React from 'react';
import { Link, IndexLink } from 'react-router';

export const NavLink = (props) => {
  return (
    <Link {...props} activeClassName='active'/>
  );
};

export const IndexNav = (props) => {
  return (
    <IndexLink {...props} activeClassName='active'/>
  );
};
