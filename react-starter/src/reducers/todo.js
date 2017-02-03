import {
  FETCH_TODOS,
  ADD_TODO,
  FILTER_TODO,
  SEARCH_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  EDIT_TODO,
  LOADING,
  FAIL,
  UNFAIL
} from '../constants/';

const initialState = {
  loading: false,
  filtered: false,
  search: '',
  todos: [],
  completed: [],
  errors: {
    noName: true,
    noText: true,
    invalidTime: true
  }
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
  case LOADING:
    return {...state, loading: true};
  case FETCH_TODOS:
    return {...state, todos: action.payload, loading: false};
  case ADD_TODO:
    return {...state, todos: [...state.todos, action.payload]};
  case FILTER_TODO:
    return {...state, filtered: action.payload, completed: filterCompleted(state.todos)};
  case SEARCH_TODO:
    return {...state, search: action.payload};
  case COMPLETE_TODO:
    return {...state, todos: toggle(state.todos, action.payload)};
  case DELETE_TODO:
    return {...state, todos: deleteFromState(state.todos, action.payload)};
  case EDIT_TODO:
    return {...state, todos: editTodo(state.todos, action.payload)};
  case FAIL:
    return {...state, errors: Object.assign({}, state.errors, action.payload)};
  case UNFAIL:
    return {...state, errors: nullify(state.errors)};
  default:
    return state;
  }
}

const filterCompleted = (state) => {
  const newState = state.filter((item) => {
    return item.completed === true;
  });
  return newState;
};

const toggle = (state, data) => {
  const { id, completed } = data;
  const newState = state.map((item) => {
    if (item.id === id) {
      item.completed = completed;
    }
    return item;
  });
  return newState;
};

const deleteFromState = (state, id) => {
  const newState = state.filter((item) => {
    return item.id !== id;
  });
  return newState;
};

const editTodo = (state, obj) => {
  const newState = state.map((item) => {
    if (item.id === obj.id) item = obj;
    return item;
  });
  return newState;
};

const nullify = (state) => {
  return {
    noName: true,
    noText: true,
    invalidTime: true
  };
};
