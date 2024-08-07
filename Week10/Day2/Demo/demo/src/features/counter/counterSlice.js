import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  status: "idle",
};

export const delayIncrementThunk = createAsyncThunk(
  "counter/delay",
  async () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(4);
      }, 5000);
    });
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },

    decrement: (state) => {
      state.count -= 1;
    },

    reset: (state) => {
      state.count = 0;
    },

    addBoth: (state, action) => {
      const { value1, value2 } = action.payload;
      const sum = value1 + value2;
      state.count += sum;
    },

    delay: (state, action) => {
      setTimeout(() => {
        state.count += 5;
      }, 2000);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(delayIncrementThunk.fulfilled, (state, action) => {
      state.count += action.payload;
    });
  },
});

export const { increment, decrement, reset, addBoth, delay } =
  counterSlice.actions;

export default counterSlice.reducer;
