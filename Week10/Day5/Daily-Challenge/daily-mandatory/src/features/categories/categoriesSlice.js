import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,

  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },

    editCategory: (state, action) => {
      const { id, updatedCategory } = action.payload;

      const index = state.categories.findIndex(
        (category) => category.id === id
      );

      if (index !== -1) {
        state.categories[index] = {
          ...state.categories[index],
          ...updatedCategory,
        };
      }
    },

    deleteCategory: (state, action) => {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload
      );
    },
  },
});

export const { addCategory, editCategory, deleteCategory } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
