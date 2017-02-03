import {
  SHOW_MODAL_DELETE,
  SHOW_MODAL_EDIT,
  HIDE_MODALS
} from '../constants/';

const initialState = {
  editing: false,
  deleting: false,
  tempTodo: {
    completed: '',
    id: '',
    text: '',
    time: '',
    note: '',
  }
};

export default function modals(state = initialState, action) {
  switch (action.type) {
  case SHOW_MODAL_DELETE:
    return {...state, deleting: true, editing: false, tempTodo: action.payload };
  case SHOW_MODAL_EDIT:
    return {...state, deleting: false, editing: true, tempTodo: action.payload };
  case HIDE_MODALS:
    return {...state, deleting: false, editing: false};
  default:
    return state;
  }
}
