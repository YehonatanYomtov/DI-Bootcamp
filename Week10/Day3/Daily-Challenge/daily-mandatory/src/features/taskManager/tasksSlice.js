import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  selectedDay: null,
  tasksByDay: {},
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,

  reducers: {
    setSelectedDay: (state, action) => {
      state.selectedDay = action.payload;
    },

    addTask: (state, action) => {
      const { day, text } = action.payload;

      const newTask = {
        id: nanoid(),
        text,
      };

      if (state.tasksByDay[day]) {
        state.tasksByDay[day].push(newTask);
      } else {
        state.tasksByDay[day] = [newTask];
      }
    },

    editTask: (state, action) => {
      const { id, day, text } = action.payload;
      const index = state.tasksByDay[day].findIndex((task) => task.id === id);

      if (index !== -1) {
        state.tasksByDay[day][index] = { id, text };
      }
    },

    deleteTask: (state, action) => {
      const { id, day } = action.payload;
      const index = state.tasksByDay[day].findIndex((task) => task.id === id);

      if (index !== -1) {
        state.tasksByDay[day].splice(index, 1);
      }
    },
  },
});

export const { setSelectedDay, addTask, editTask, deleteTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
