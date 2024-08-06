import { useSelector } from "react-redux";

import TodoItem from "./TodoItem";

function TodoList() {
  const todoList = useSelector((state) => state.todos.todoList);

  return (
    <ul>
      {todoList.map((item) => (
        <TodoItem item={item} key={item.id} />
      ))}
    </ul>
  );
}

export default TodoList;
