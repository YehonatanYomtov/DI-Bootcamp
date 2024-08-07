import { configureStore } from "@reduxjs/toolkit";

// Age Counter Slice
import ageCounterReducer from "../features/ageCounter/ageCounterSlice";

export const store = configureStore({
  reducer: {
    age: ageCounterReducer,
  },
});
