import { connect } from "react-redux";

// Actions
import { deleteTask, editTask } from "../redux/actions";

function TasksDisplay({ selectedDay, tasks, editTask, deleteTask }) {
  console.log(tasks);
  if (!selectedDay) return <div>Please select a day.</div>;

  function handleEdit(taskId) {
    const updatedTaskText = prompt("Edit Task: ");
    if (updatedTaskText) {
      editTask(selectedDay, taskId, { id: taskId, text: updatedTaskText });
    }
  }

  function handleDelete(taskId) {
    deleteTask(selectedDay, taskId);
  }

  return (
    <div className="tasks-container">
      <h3>Tasks for {selectedDay}</h3>
      <ul>
        {tasks[selectedDay] &&
          tasks[selectedDay].map((task) => (
            <li key={task.id}>
              {task.text}
              <button className="edit-btn" onClick={() => handleEdit(task.id)}>
                Edit
              </button>
              <button className="del-btn" onClick={() => handleDelete(task.id)}>
                ⅹ
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    selectedDay: state.tasks.selectedDay,
    tasks: state.tasks.tasksByDay,
  };
}

const mapDispatchToProps = {
  deleteTask,
  editTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksDisplay);
