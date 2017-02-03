import { HIDE_MODALS } from '../constants/';

const initialState = {  };

export default function file(state = initialState, action) {
  switch (action.type) {
  case HIDE_MODALS:
    return state;
  default:
    return state;
  }
}
