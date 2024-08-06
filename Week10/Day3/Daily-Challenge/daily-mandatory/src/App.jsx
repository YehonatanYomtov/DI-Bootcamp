// Components
import AddTask from "./features/taskManager/AddTask";
import DatePicker from "./features/taskManager/DatePicker";
import TasksList from "./features/taskManager/TasksList";

// Styling
import "./App.css";

function App() {
  return (
    <div className="vh-100 d-flex flex-column gap-4 justify-content-center align-items-center">
      <h1 className="text-primary">Task Manager</h1>

      <DatePicker />
      <AddTask />
      <TasksList />
    </div>
  );
}

export default App;
