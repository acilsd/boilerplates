import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERR, FETCH_MESSAGE } from './constants';

//url
const ROOT_URL = 'http://localhost:3080';

export function signInUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, { email, password })
    .then(response => {
      dispatch({ type: AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/feature');
    })
    .catch(() => {
      dispatch(authError('Bad Login Info'));
    });
  };
}

export function signUpUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, password })
    .then(response => {
      dispatch({ type: AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/feature');
    })
    .catch(response => dispatch(authError(response.data.error)));
  };
}

export function authError(error) {
  return {
    type: AUTH_ERR,
    payload: error
  };
}

export function signOutUser() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}

//sample auth request with token

export function fetchMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.geiItem('token') }
    })
    .then(response => {
      dispatch({
        type: FETCH_MESSAGE,
        payload: response.data.message
      });
    });
  };
}
