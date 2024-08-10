import { createSelector } from "@reduxjs/toolkit";

export const selectTasksByCategory = (categoryId) =>
  createSelector(
    (state) => state.tasks.tasks,
    (tasks) => tasks.filter((task) => task.categoryId === categoryId)
  );

export const selectCompletedTasks = (categoryId) =>
  createSelector(
    (state) => state.tasks.tasks,
    (tasks) =>
      tasks.filter((task) => task.completed && task.categoryId === categoryId)
  );

export const selectCategoryById = (categoryId) =>
  createSelector(
    (state) => state.categories.categories,
    (categories) => categories.find((category) => category.id === categoryId)
  );
