import { createSlice } from "@reduxjs/toolkit";
import { v4 as uniqueId } from "uuid";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todoList: [],
  },

  reducers: {
    addTodo: (state, action) => {
      state.todoList.push({
        id: uniqueId(),
        task: action.payload,
        completed: false,
      });
    },

    toggleTodo: (state, action) => {
      const match = state.todoList.find((task) => task.id === action.payload);

      if (match) {
        match.completed = !match.completed;
      }
    },

    removeTodo: (state, action) => {
      const index = state.todoList.findIndex(
        (task) => task.id === action.payload
      );
      if (index !== -1) {
        state.todoList.splice(index, 1);
      }
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
