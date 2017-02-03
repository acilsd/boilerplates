/*eslint no-console: off*/
import * as types from '../constants/';
import { fbRef } from '../firebase';

import {
  addTodo,
  completeTodo,
  editTodo,
  deleteTodo
} from './actions-tasks';

export const fetchTasks = (uid) => {
  return (dispatch) => {
    const dataRef = fbRef.child(`users/${uid}/tasks`);
    dispatch({
      type: types.LOADING
    });
    return dataRef.once('value').then((res) => {
      const raw = res.val() || {};
      const parsed = Object.keys(raw).map((id) => {
        return {id, ...raw[id]};
      });
      dispatch({
        type: types.FETCH_TODOS,
        payload: parsed
      });
    }), err => console.error(err);
  };
};

export const addToFirebase = (data, uid) => {
  return (dispatch) => {
    const newTask = {
      name: data.name,
      text: data.text,
      time: data.time,
      note: data.note,
      completed: false
    };
    const taskRef = fbRef.child(`users/${uid}/tasks`).push(newTask);
    return taskRef.then(() => {
      dispatch(addTodo({
        ...newTask,
        id: taskRef.key
      }));
    }), err => console.error(err);
  };
};

export const editInFirebase = (data, uid) => {
  return (dispatch) => {
    const { completed, id, name, note, text, time } = data;
    const taskRef = fbRef.child(`users/${uid}/tasks/${id}`);
    const updates = { completed, name, note, text, time };
    return taskRef.update(updates).then(() => {
      dispatch(editTodo({...updates, id}));
    }), err => console.error(err);
  };
};

export const deleteFromFirebase = (uid, id) => {
  return (dispatch) => {
    const taskRef = fbRef.child(`users/${uid}/tasks/${id}`);
    console.log(id);
    return taskRef.remove().then(() => {
      dispatch(deleteTodo(id));
    }), err => console.error(err);
  };
};

export const toggleFbStatus = (id, status, uid) => {
  return (dispatch) => {
    const taskRef = fbRef.child(`users/${uid}/tasks/${id}`);
    const updates = { completed: status };
    return taskRef.update(updates).then(() => {
      dispatch(completeTodo(id, status));
    }), err => console.error(err);
  };
};
