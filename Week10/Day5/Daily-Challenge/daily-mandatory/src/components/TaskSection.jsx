function TaskSection({ newTask, setNewTask, onAddTask }) {
  return (
    <div className="task-section">
      <h2>Tasks</h2>

      <input
        type="text"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        placeholder="Task Title"
      />
      <textarea
        value={newTask.description}
        onChange={(e) =>
          setNewTask({ ...newTask, description: e.target.value })
        }
        placeholder="Task Description"
      />
      <button onClick={onAddTask}>Add Task</button>
    </div>
  );
}

export default TaskSection;
