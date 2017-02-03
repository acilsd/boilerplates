import { combineReducers } from 'redux';
import file from './file';
import { routerReducer } from 'react-router-redux'; 

const rootReducer = combineReducers({
  routing: routerReducer,
  file
});

export default rootReducer;
