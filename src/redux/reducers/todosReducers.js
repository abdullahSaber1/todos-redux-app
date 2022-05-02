import {ADD_TODO, DEL_TODO, GET_TODO, TOGGLE_TODO} from '../actionTypes';

export default (state = [], action) => {
  let newState = state;
  switch (action.type) {
    case GET_TODO:
      newState = action.payload;
      break;

    case ADD_TODO:
      newState = [...state, action.payload];

      break;

    case DEL_TODO:
      newState = state.filter((todo) => todo.id !== action.payload);
      break;

    case TOGGLE_TODO:
      newState = state.map((todo) =>
        todo.id === action.payload ? {...todo, isDone: !todo.isDone} : todo
      );
      break;

    default:
      newState = state;
      break;
  }
  return newState;
};
