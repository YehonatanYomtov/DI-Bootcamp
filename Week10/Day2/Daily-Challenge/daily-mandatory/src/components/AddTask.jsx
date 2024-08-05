import { useState } from "react";
import { connect } from "react-redux";
import { v4 as uniqueId } from "uuid";

// Actions
import { addTask } from "../redux/actions";

function AddTask({ selectedDay, addTask }) {
  const [taskText, setTaskText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (selectedDay && taskText.trim()) {
      addTask(selectedDay, { id: uniqueId(), text: taskText });
      setTaskText("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
}

function mapStateToProps(state) {
  return { selectedDay: state.tasks.selectedDay };
}

const mapDispatchToProps = {
  addTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
