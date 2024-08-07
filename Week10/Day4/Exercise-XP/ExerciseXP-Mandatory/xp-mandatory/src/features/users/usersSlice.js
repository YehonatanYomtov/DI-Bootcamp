import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async function () {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
  }
);

const initialState = {
  users: [],
  status: "idle",
  error: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "success";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

// export const {} = usersSlice.actions;

export default usersSlice.reducer;
