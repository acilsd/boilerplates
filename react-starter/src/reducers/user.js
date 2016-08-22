import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/actions-user';

const initialState = {
  name: '',
  error: ''
};

export default function user(state = initialState, action) {
  switch(action.type) {
  case LOGIN_SUCCESS:
    return { ...state, name: action.payload, error: '' };
  case LOGIN_FAIL:
    return { ...state, error: action.payload.message };
  default:
    return state;
  }
}
