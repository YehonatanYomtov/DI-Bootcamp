import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "./todoSlice";

function TodoItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="item-container">
      <li
        onClick={() => dispatch(toggleTodo(item.id))}
        className={item.completed ? "done" : ""}
      >
        {item.task}
      </li>

      <button onClick={() => dispatch(removeTodo(item.id))}>x</button>
    </div>
  );
}

export default TodoItem;
