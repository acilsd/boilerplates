import React from 'react';
import NavBar from '../NavBar';

import { AppRoutes } from '../../router';

const App = (props) => {
  return (
    <div>
      <NavBar />
      <div class='row'>
        <div class='column small-centered medium-6 large-4'>
          <AppRoutes />
        </div>
      </div>
    </div>
  );
};

export default App;
