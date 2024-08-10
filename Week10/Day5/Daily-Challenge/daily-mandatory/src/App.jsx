import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

// Components
import TaskList from "./components/TaskList";
import CategorySection from "./components/CategorySection";
import TaskSection from "./components/TaskSection";

// Slices
import { addCategory } from "./features/categories/categoriesSlice.js";
import { addTask } from "./features/tasks/tasksSlice.js";

// Styles
import "./App.css";

function App() {
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const [newCategory, setNewCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = useSelector((state) => state.categories.categories);

  const dispatch = useDispatch();

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  function handleAddTask() {
    if (newTask.title && selectedCategory) {
      dispatch(
        addTask({
          ...newTask,
          categoryId: selectedCategory,
          id: nanoid(),
          completed: false,
        })
      );

      setNewTask({ title: "", description: "" });
    }
  }

  function handleAddCategory() {
    if (newCategory) {
      const categoryExists = categories.some(
        (category) => category.name.toLowerCase() === newCategory.toLowerCase()
      );

      if (!categoryExists) {
        dispatch(addCategory({ id: Date.now(), name: newCategory }));
        setNewCategory("");
      } else {
        alert("Category already exists!");
      }
    }
  }

  return (
    <div className="app">
      <h1>Productivity Tracker</h1>

      <CategorySection
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
        onAddCategory={handleAddCategory}
        newCategory={newCategory}
        setNewCategory={setNewCategory}
      />

      <TaskSection
        newTask={newTask}
        setNewTask={setNewTask}
        onAddTask={handleAddTask}
      />

      <TaskList selectedCategoryId={selectedCategory} />
    </div>
  );
}

export default App;
