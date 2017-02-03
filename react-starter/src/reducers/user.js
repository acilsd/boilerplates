import {
  LOG_IN,
  LOG_OUT,
  CHECK_SESSION
} from '../constants/';

const initialState = {
  loggedIn: false,
  uid: '',
  user: {}
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
  case LOG_IN:
    return {...state, loggedIn: true, uid: action.uid, user: action.data };
  case LOG_OUT:
    return {...state, loggedIn: false, uid: '', user: {}};
  case CHECK_SESSION:
    return {...state, loggedIn: true, uid: action.uid, user: action.user};
  default:
    return state;
  }
}
