import React from 'react';

const App = ({ name }) => {
  return (
    <div>
      {name}
    </div>
  );
};

// NOTE: 
//dont forget about proptypes duuuude

App.propTypes = {
  name: React.PropTypes.string.isRequired
};

App.defaultProps = { name: 'SampleMan' };

export default App;
