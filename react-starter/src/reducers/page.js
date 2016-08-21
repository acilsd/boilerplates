import { SET_YEAR } from '../actions/actions-page';

const initialState = {
  year: 2016,
  photos: ['20']
};

export default function page(state = initialState, action) {
  switch(action.type) {
  case SET_YEAR:
    return {...state, year: action.payload};
  default:
    return state;
  }
}
