export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const SET_SELECTED_DAY = "SET_SELECTED_DAY";

export function addTask(day, task) {
  return {
    type: ADD_TASK,
    payload: { day, task },
  };
}

export function editTask(day, taskId, updatedTask) {
  return {
    type: EDIT_TASK,
    payload: { day, taskId, updatedTask },
  };
}

export function deleteTask(day, taskId) {
  return {
    type: DELETE_TASK,
    payload: { day, taskId },
  };
}

export function setSelectedDay(day) {
  return {
    type: SET_SELECTED_DAY,
    payload: day,
  };
}
