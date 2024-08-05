// Components
import TodoList from "./components/TodoList";
import TaskInputForm from "./components/TaskInputForm";

// Styling
import "./App.css";

function App() {
  return (
    <div className="App">
      <TaskInputForm />

      <TodoList />
    </div>
  );
}

export default App;
