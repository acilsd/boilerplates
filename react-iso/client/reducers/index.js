import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

module.exports = combineReducers({
  routing: routerReducer,
});
