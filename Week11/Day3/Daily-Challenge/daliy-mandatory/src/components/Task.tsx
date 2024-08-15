// Types
import { TaskType } from "../App";

type TasksProps = {
  task: TaskType;
  handleDeleteTask: (id: string) => void;
  handleToggleComplete: (id: string) => void;
};

function Task({ task, handleDeleteTask, handleToggleComplete }: TasksProps) {
  return (
    <li className="task">
      <p
        className={task.completed ? "complete" : ""}
        onClick={() => handleToggleComplete(task.id)}
      >
        {task.task}
      </p>

      <button onClick={() => handleDeleteTask(task.id)}>X</button>
    </li>
  );
}

export default Task;
