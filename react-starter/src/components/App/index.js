import React from 'react';
import normalize from '../../../node_modules/node-normalize-scss/_normalize.scss';

import NavBar from '../NavBar';
import { AppRoutes } from '../../router';

const App = () => {
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
