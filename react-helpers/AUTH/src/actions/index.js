import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  ROUTING
} from '../constants/ActionTypes';

export const login = (payload) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST
    });
    setTimeout(() => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          name: payload.name,
          isAuthenticated: true
        }
      });
      dispatch({
        type: ROUTING,
        payload: {
          method: 'replace',
          nextUrl: '/admin'
        }
      });
    }, 2000);
  };
};

export const logout = () => {
  return {
    type: LOGIN_SUCCESS
  };
};
