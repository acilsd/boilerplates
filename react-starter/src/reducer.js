/* @flow */
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  form: formReducer,
};

export type Reducers = typeof reducers;

export default combineReducers(reducers);
