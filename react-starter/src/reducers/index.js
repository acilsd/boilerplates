import { combineReducers } from 'redux';
import todos from './reducer-todo';

const rootReducer = combineReducers({
  todos
});

export default rootReducer;
