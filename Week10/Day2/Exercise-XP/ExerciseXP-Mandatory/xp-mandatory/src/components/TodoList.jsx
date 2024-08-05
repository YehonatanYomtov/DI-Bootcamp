import { connect } from "react-redux";

// Components
import TodoItem from "./TodoItem";

function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoItem item={item} key={item.id} />
      ))}
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    todoList: state.todoReducer.todoList,
  };
}

export default connect(mapStateToProps)(TodoList);
