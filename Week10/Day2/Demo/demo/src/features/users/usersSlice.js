// [
//   { id: 1, name: "John", email: "john@gmail.com" },
//   { id: 2, name: "Mike", email: "mike@gmail.com" },
//   { id: 3, name: "Alex", email: "alex@gmail.com" },
// ];

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    // { id: 1, name: "John", email: "john@gmail.com" },
    // { id: 2, name: "Mike", email: "mike@gmail.com" },
    // { id: 3, name: "Alex", email: "alex@gmail.com" },
  ],
  status: "",
  error: "",
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push({
        id: Date.now(),
        name: action.payload.name,
        email: action.payload.email,
      });
    },

    // initUsers: (state, action) => {
    //   state.users = action.payload;
    // },

    addUserWithPrepare: {
      reducer(state, action) {
        state.users.push(action.payload);
      },
      prepare(name, email) {
        const id = Date.now();
        return { payload: { id, name, email } };
      },
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addUser, addUserWithPrepare, initUsers } = usersSlice.actions;

export default usersSlice.reducer;
