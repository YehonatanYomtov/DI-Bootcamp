import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,

  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
    },

    editTask(state, action) {
      const { id, updatedTask } = action.payload;

      const index = state.tasks.findIndex((task) => task.id === id);

      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...updatedTask };
      }
    },

    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    completeTask(state, action) {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = true;
      }
    },
  },
});

export const { addTask, editTask, deleteTask, completeTask } =
  tasksSlice.actions;
export default tasksSlice.reducer;
