// Components
import DatePicker from "./components/DatePicker";
import AddTask from "./components/AddTask";
import TasksDisplay from "./components/TasksDisplay";

// Styling
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Task Manager</h1>

      <DatePicker />
      <AddTask />
      <TasksDisplay />
    </div>
  );
}

export default App;
