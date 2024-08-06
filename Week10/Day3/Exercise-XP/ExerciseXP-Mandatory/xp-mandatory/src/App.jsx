import "./App.css";
import AddTodo from "./features/todo/AddTodo";
import TodoList from "./features/todo/TodoList";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
