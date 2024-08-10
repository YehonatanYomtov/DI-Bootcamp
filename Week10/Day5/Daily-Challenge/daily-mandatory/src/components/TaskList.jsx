import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import TaskItem from "./TaskItem";
import TaskCount from "./TaskCount";

// Selectors
import { selectTasksByCategory, selectCompletedTasks } from "../selectors";

// Slices
import {
  editTask,
  deleteTask,
  completeTask,
} from "../features/tasks/tasksSlice.js";

function TaskList({ selectedCategoryId }) {
  const [editedTask, setEditedTask] = useState({ title: "", description: "" });
  const [editingTaskId, setEditingTaskId] = useState(null);

  const tasks = useSelector(selectTasksByCategory(selectedCategoryId));
  const completedTasksCount = useSelector(
    selectCompletedTasks(selectedCategoryId)
  );

  const dispatch = useDispatch();

  const handleEditTask = useCallback((id, task) => {
    setEditingTaskId(id);
    setEditedTask(task);
  }, []);

  const handleSaveEdit = useCallback(() => {
    dispatch(editTask({ id: editingTaskId, updatedTask: editedTask }));
    setEditingTaskId(null);
  }, [dispatch, editingTaskId, editedTask]);

  const handleDeleteTask = useCallback(
    (id) => {
      dispatch(deleteTask(id));
    },
    [dispatch]
  );

  const handleCompleteTask = useCallback(
    (id) => {
      dispatch(completeTask(id));
    },
    [dispatch]
  );

  return (
    <div className="task-list">
      <TaskCount count={completedTasksCount.length} />
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          isEditing={editingTaskId === task.id}
          onEdit={handleEditTask}
          onSave={handleSaveEdit}
          onComplete={handleCompleteTask}
          onDelete={handleDeleteTask}
          editedTask={editedTask}
          setEditedTask={setEditedTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
