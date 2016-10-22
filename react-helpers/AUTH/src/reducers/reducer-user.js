import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REDIRECT
} from '../constants/ActionTypes';

const initialState = JSON.parse(window.localStorage.getItem('rr_user')) || {};


export default function userstate(state = initialState, action) {

  switch (action.type) {

  case LOGIN_REQUEST:
    return state;

  case LOGIN_SUCCESS:
    return {
      ... state, name: action.payload.name, isAuthenticated: action.payload.isAuthenticated
    };

  case LOGIN_FAIL:
    return {};

  case LOGOUT_SUCCESS:
    return {};

  default:
    return state;
  }
}
