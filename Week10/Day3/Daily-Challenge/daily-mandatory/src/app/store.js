import { configureStore } from "@reduxjs/toolkit";

// Tasks Slice
import tasksReducer from "../features/taskManager/tasksSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;
