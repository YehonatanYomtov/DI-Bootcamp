import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const ageUpAsync = createAsyncThunk("age/ageUpAsync", async (amount) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return amount;
});

export const ageDownAsync = createAsyncThunk(
  "age/ageDownAsync",
  async (amount) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return amount;
  }
);

const initialState = {
  age: 0,
  status: "idle",
  error: "",
};

export const ageCounterReducer = createSlice({
  name: "age",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(ageUpAsync.pending, (state, action) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(ageUpAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.age += action.payload;
      })
      .addCase(ageUpAsync.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error;
      })

      // ========================

      .addCase(ageDownAsync.pending, (state, action) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(ageDownAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.age -= action.payload;
      })
      .addCase(ageDownAsync.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error;
      });
  },
});

export default ageCounterReducer.reducer;
