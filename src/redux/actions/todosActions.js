import {ADD_TODO, DEL_TODO, GET_TODO, TOGGLE_TODO} from '../actionTypes';
import axios from 'axios';

const base_url = 'http://localhost:3005/todos';

export const getAllTodos = () => async (dispatch) => {
  const response = await axios.get(base_url).catch((err) => console.log(err));

  const todos = await response.data;

  dispatch(getAllTodosSuccess(todos));
};

const getAllTodosSuccess = (newTodos) => {
  return {
    type: GET_TODO,
    payload: newTodos,
  };
};

export const addTodo = (todo) => async (dispatch) => {
  const response = await axios.post(base_url, todo);
  if (response.status === 201) dispatch(addTodoSuccuss(todo));
};

export const addTodoSuccuss = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const toggleTodo = (id, isDone) => async (dispatch) => {
  const update = {
    isDone: !isDone,
  };
  await axios.patch(`${base_url}/${id}`, update);
  dispatch(toggleTodoSuccuss(id));
};

const toggleTodoSuccuss = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};

export const deleteTodo = (id) => async (dispatch) => {
  const response = await axios
    .delete(`${base_url}/${id}`)
    .catch((err) => console.log(err));
  if (response.status === 200) dispatch(deleteTodoSuccess(id));
};

const deleteTodoSuccess = (id) => {
  return {
    type: DEL_TODO,
    payload: id,
  };
};
