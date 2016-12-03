import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux'; synch router with store

import todos from './reducer-todo';

const rootReducer = combineReducers({
  // routing: routerReducer
  todos
});

export default rootReducer;
