import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

// Components
import Task from "./Task";

function TasksDisplay() {
  const selectedDay = useSelector((state) => state.tasks.selectedDay);
  const tasks = useSelector((state) => state.tasks.tasksByDay);

  if (!selectedDay) return <div>Please select a day.</div>;

  return (
    <div className="mt-4">
      <h3 className="text-secondary">Tasks for {selectedDay}</h3>

      <ul className="h-200 w-200 border rounded shadow-sm list-group">
        {tasks[selectedDay] &&
          tasks[selectedDay].map((task) => <Task task={task} key={nanoid()} />)}
      </ul>
    </div>
  );
}

export default TasksDisplay;
