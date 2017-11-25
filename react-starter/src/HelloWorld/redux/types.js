/* @flow */
export type ActionType = {
  username: string,
  password: string | number,
  token?: string,
};

export type Action = { type: string, data: ActionType };
export type PromiseAction = Promise<Action>;
export type ThunkAction = (dispatch: Dispatch) => any;
export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;

export type Store = {
  +username: string,
  +token: string,
  +isLoggedIn: boolean,
};
