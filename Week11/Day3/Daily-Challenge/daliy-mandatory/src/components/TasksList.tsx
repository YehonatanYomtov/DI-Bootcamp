// Components
import Task from "./Task";

// Types
import { TaskType } from "../App";

export type TasksListProps<T> = {
  tasks: T[];
  handleDeleteTask: (id: string) => void;
  handleToggleComplete: (id: string) => void;
};

function TasksList<T extends TaskType>({
  tasks,
  handleDeleteTask,
  handleToggleComplete,
}: TasksListProps<T>) {
  return (
    <ul className="tasks-list">
      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        tasks.map((task) => (
          <Task
            task={task}
            handleDeleteTask={handleDeleteTask}
            handleToggleComplete={handleToggleComplete}
            key={task.id}
          />
        ))
      )}
    </ul>
  );
}

export default TasksList;
