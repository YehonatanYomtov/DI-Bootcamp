import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer, { increment } from "../features/counter/counterSlice";
import usersReducer, { initUsers } from "../features/users/usersSlice";
// import { thunk } from "redux-thunk";

const appReducers = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

// Usually in middleware folder
export const logger = (store) => (next) => (action) => {
  console.log(store.getState());
  console.log(action);

  next(action);
};

export const store = configureStore({
  reducer: appReducers,
  // middleware: () => [logger, thunk],
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

store.dispatch((dispatch, getState) => {
  setTimeout(() => {
    dispatch(increment());
  }, 2000);
});
