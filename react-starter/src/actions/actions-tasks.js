import * as types from '../constants/';

export const addTodo = (data) => {
  const newTask = {
    id: data.id,
    name: data.name,
    text: data.text,
    time: data.time,
    note: data.note,
    completed: false
  };
  return {
    type: types.ADD_TODO,
    payload: newTask
  };
};

export const searchTodo = (data) => ({ type: types.SEARCH_TODO, payload: data });

export const filterDone = (status) => ({ type: types.FILTER_TODO, payload: status });

export const completeTodo = (id, status) => ({ type: types.COMPLETE_TODO, payload: {id, completed: status} });

export const deleteTodo = (id) => ({ type: types.DELETE_TODO, payload: id });

export const editTodo = (obj) => ({ type: types.EDIT_TODO, payload: obj });

export const modalDelete = (obj) => ({ type: types.SHOW_MODAL_DELETE, payload: obj });

export const modalEdit = (obj) => ({ type: types.SHOW_MODAL_EDIT, payload: obj });

export const hideAllModals = () => ({ type: types.HIDE_MODALS });

export const validateThis = (obj) => ({ type: types.FAIL, payload: obj });

export const deValidate = () => ({ type: types.UNFAIL });
