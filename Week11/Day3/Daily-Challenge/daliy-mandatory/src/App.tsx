import { useRef, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

// Components
import AddTaskInputForm from "./components/AddTaskInputForm";
import TasksList from "./components/TasksList";

// Styles
import "./App.css";

// Types
export type TaskType = {
  id: string;
  task: string;
  completed: boolean;
};

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const taskInput = useRef<HTMLInputElement>(null);

  function handleAddTaskSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!taskInput.current) return;

    const inputValue: string = taskInput.current.value.trim();

    if (!inputValue) return;

    const newTask: TaskType = {
      id: nanoid(),
      task: inputValue,
      completed: false,
    };

    setTasks((curTasks) => [...curTasks, newTask]);

    taskInput.current.value = "";
  }

  function handleToggleComplete(id: string) {
    setTasks((curTasks) =>
      curTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleDeleteTask(id: string): void {
    setTasks((curTasks) => curTasks.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <AddTaskInputForm
        taskInput={taskInput}
        handleAddTaskSubmit={handleAddTaskSubmit}
      />

      <TasksList
        tasks={tasks}
        handleToggleComplete={handleToggleComplete}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
