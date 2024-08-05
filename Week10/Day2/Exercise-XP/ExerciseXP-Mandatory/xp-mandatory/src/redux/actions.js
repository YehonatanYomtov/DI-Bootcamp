export const ADD = "ADD_TODO";
export const COMPLETE = "TOGGLE_COMPLETE_TODO";
export const DELETE = "DELETE_TODO";

export function addTodoTask(todoTask) {
  return {
    type: ADD,
    payload: todoTask,
  };
}

export function toggleCompleteTodoTask(id) {
  return {
    type: COMPLETE,
    payload: id,
  };
}

export function deleteTodoTask(id) {
  return {
    type: DELETE,
    payload: id,
  };
}
