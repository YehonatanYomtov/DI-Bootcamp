import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Tasks Slice
import { addTask } from "./tasksSlice";

function AddTask() {
  const [taskText, setTaskText] = useState("");
  const selectedDay = useSelector((state) => state.tasks.selectedDay);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    if (selectedDay && taskText.trim()) {
      dispatch(addTask({ day: selectedDay, text: taskText }));
      setTaskText("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
        className="form-control shadow-sm"
      />
      <button
        type="submit"
        className="btn btn-primary hover-bg-secondary shadow-sm"
      >
        Add
      </button>
    </form>
  );
}

export default AddTask;
