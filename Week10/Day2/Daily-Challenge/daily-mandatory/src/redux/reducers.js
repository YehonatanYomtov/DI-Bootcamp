// reducers.js
import { ADD_TASK, EDIT_TASK, DELETE_TASK, SET_SELECTED_DAY } from "./actions";

const initialState = {
  selectedDay: null,
  tasksByDay: {},
};

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK: {
      const { day, task } = action.payload;
      return {
        ...state,
        tasksByDay: {
          ...state.tasksByDay,
          [day]: [...(state.tasksByDay[day] || []), task],
        },
      };
    }

    case EDIT_TASK: {
      const { day, taskId, updatedTask } = action.payload;
      return {
        ...state,
        tasksByDay: {
          ...state.tasksByDay,
          [day]: state.tasksByDay[day].map((task) =>
            task.id === taskId ? updatedTask : task
          ),
        },
      };
    }

    case DELETE_TASK: {
      const { day, taskId } = action.payload;
      return {
        ...state,
        tasksByDay: {
          ...state.tasksByDay,
          [day]: state.tasksByDay[day].filter((task) => task.id !== taskId),
        },
      };
    }

    case SET_SELECTED_DAY:
      return {
        ...state,
        selectedDay: action.payload,
      };

    default:
      return state;
  }
}
