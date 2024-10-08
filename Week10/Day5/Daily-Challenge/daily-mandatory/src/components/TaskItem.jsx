function TaskItem({
  task,
  isEditing,
  onEdit,
  onSave,
  onComplete,
  onDelete,
  editedTask,
  setEditedTask,
}) {
  function handleEdit() {
    onEdit(task.id, { title: task.title, description: task.description });
  }

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask.title}
            onChange={(e) =>
              setEditedTask({ ...editedTask, title: e.target.value })
            }
          />
          <textarea
            value={editedTask.description}
            onChange={(e) =>
              setEditedTask({ ...editedTask, description: e.target.value })
            }
          />
          <button onClick={onSave}>Change</button>
        </>
      ) : (
        <>
          <div className="task-text-container">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>

          <div className="btns-container">
            {!task.completed && (
              <>
                <button className="edit-btn" onClick={handleEdit}>
                  Edit
                </button>
                <button onClick={() => onComplete(task.id)}>Complete</button>
              </>
            )}
            <button className="del-btn" onClick={() => onDelete(task.id)}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;
