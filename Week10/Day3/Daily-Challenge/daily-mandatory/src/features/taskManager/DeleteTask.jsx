import { useDispatch, useSelector } from "react-redux";

// Tasks Slice
import { deleteTask } from "./tasksSlice.js";

function DeleteTask({ task }) {
  const selectedDay = useSelector((state) => state.tasks.selectedDay);
  const dispatch = useDispatch();

  return (
    <button
      className="del-btn "
      onClick={() => dispatch(deleteTask({ id: task.id, day: selectedDay }))}
    >
      ⅹ
    </button>
  );
}

export default DeleteTask;
