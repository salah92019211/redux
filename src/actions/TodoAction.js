import { ADD, DELETE, UPDATE, COMPLETE } from "./Types";
export const addTodo = (input) => {
  return { type: ADD, payload: input };
};
export const deleteTodo = (id) => {
  return { type: DELETE, payload: id };
};
export const completeTodo = (id) => {
    return { type: COMPLETE, payload: id };
  };
  export const updateTodo = (editTask,id) => {
    return {
        type:UPDATE,
        payload:{editTask,id}
    };
  };