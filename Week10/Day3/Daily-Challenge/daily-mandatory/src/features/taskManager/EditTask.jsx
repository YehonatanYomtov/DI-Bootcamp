import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Tasks Slice
import { editTask } from "./tasksSlice.js";

function EditTask({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const editInputRef = useRef(null);
  const selectedDay = useSelector((state) => state.tasks.selectedDay);
  const dispatch = useDispatch();

  function handleEditTask(taskId) {
    const editValue = editInputRef.current.value;

    if (editValue) {
      dispatch(editTask({ id: taskId, day: selectedDay, text: editValue }));
    }
    setIsEditing(false);
  }

  return (
    <div className="d-flex align-items-center">
      {isEditing ? (
        <>
          <input
            ref={editInputRef}
            type="text"
            defaultValue={task.text}
            className="border rounded fs-5"
          />
          <button
            className="btn btn-outline-primary fs-6 edit-btn"
            onClick={() => handleEditTask(task.id)}
          >
            Done
          </button>
        </>
      ) : (
        <>
          <p className="fs-5 m-0 py-2">{task.text}</p>
          <button
            className="btn btn-outline-primary fs-6 edit-btn"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default EditTask;
