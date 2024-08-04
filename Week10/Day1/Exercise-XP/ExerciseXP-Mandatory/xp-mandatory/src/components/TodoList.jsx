import { useReducer, useState } from "react";
import { v4 as uniqueId } from "uuid";

const ADD = "ADD_TODO";
const REMOVE = "REMOVE_TODO";

function todoReducer(state, action) {
  switch (action.type) {
    case ADD:
      return [...state, { id: uniqueId(), text: action.text }];
    case REMOVE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    dispatch({ type: ADD, text: todoText });
    setTodoText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: REMOVE, id });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
