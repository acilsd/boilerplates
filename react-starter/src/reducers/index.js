import { combineReducers } from 'redux';
import todo from './todo';
import modals from './modals';
import user from './user';

const rootReducer = combineReducers({
  todo,
  modals,
  user
});

export default rootReducer;
