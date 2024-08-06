// Components
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";

function Task({ task }) {
  return (
    <li key={task.id} className="list-group-item">
      <EditTask task={task} />

      <DeleteTask task={task} />
    </li>
  );
}

export default Task;
