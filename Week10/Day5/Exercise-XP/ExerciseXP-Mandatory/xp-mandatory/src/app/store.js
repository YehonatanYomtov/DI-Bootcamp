import { configureStore } from "@reduxjs/toolkit";

// Books Slice
import booksReducer from "../features/books/booksSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
