import { v4 as uniqueId } from "uuid";

import { ADD, COMPLETE, DELETE } from "./actions.js";

const initialState = {
  todoList: [],
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { id: uniqueId(), task: action.payload, completed: false },
        ],
      };

    case COMPLETE:
      return {
        ...state,
        todoList: state.todoList.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };

    case DELETE:
      return {
        ...state,
        todoList: state.todoList.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
}
