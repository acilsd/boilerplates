/* @flow */
import type { ThunkAction, Dispatch, ActionType } from './types';

import {
  START_AUTH,
  AUTH_SUCCESS,
  AUTH_FAIL,
} from './constants';


export const auth = (auth_data: ActionType): ThunkAction => {
  return async (dispatch: Dispatch): Promise<*> => {
    try {
      await dispatch({ type: START_AUTH, data: auth_data });
      console.info('STARTING AUTH');
      await dispatch({ type: AUTH_SUCCESS, data: auth_data });
      console.info('SUCCESS!');
    } catch(e) {
      dispatch({ type: AUTH_FAIL, data: auth_data });
      console.error(e);
    }
  };
};

export const logout = (): {type: string} => ({ type: AUTH_FAIL });
