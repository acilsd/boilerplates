 import React from 'react';
 import styles from './style.scss';

 const Controls = ({ status, statusChange }) => {

   const renderButton = () => {
     return (
      status === 'started'
      ?
      <button class='button secondary' onClick={onStatusChange('paused')}>Pause</button>
      :
      <button class='button primary' onClick={onStatusChange('started')}>Start</button>
     );
   };

   const onStatusChange = (status) => {
     return () => {
       statusChange(status);
     };
   };

   return (
    <div class='controls'>
      {renderButton()}
      <button class='button alert hollow' onClick={onStatusChange('stopped')}>
        Clear
      </button>
    </div>
   );
 };

 Controls.PropTypes = {
   status: React.PropTypes.string.isRequired,
   statusChange: React.PropTypes.func.isRequired
 };

 export default Controls;
