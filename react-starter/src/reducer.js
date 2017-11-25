/* @flow */
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import hello_world from './HelloWorld/redux/reducer';

const reducers = {
  hello_world,
  form: formReducer,
};

export type Reducers = typeof reducers;

export default combineReducers(reducers);
