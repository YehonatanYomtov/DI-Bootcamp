import { connect } from "react-redux";

// Actions
import { toggleCompleteTodoTask, deleteTodoTask } from "../redux/actions";

function TodoItem({ item, toggleComplete, deleteTask }) {
  return (
    <div className="item-container">
      <li
        onClick={() => toggleComplete(item.id)}
        className={item.completed ? "done" : ""}
      >
        {item.task}
      </li>

      <button onClick={() => deleteTask(item.id)}>x</button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    toggleComplete: (id) => dispatch(toggleCompleteTodoTask(id)),
    deleteTask: (id) => dispatch(deleteTodoTask(id)),
  };
}

export default connect(null, mapDispatchToProps)(TodoItem);
