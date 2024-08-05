import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./reducers.js";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;
