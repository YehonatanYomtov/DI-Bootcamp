import { useReducer } from "react";
import { v4 as uniqueId } from "uuid";

import Item from "./components/Item";
import AddInputForm from "./components/AddInputForm";

import "./App.css";

export const ADD = "ADD_TASK";
export const REMOVE = "REMOVE_TASK";
export const EDIT = "EDIT_TASK";
export const COMPLETE = "COMPLETE_TASK";
export const FILTER = "FILTER_TASK";

const initialState = {
  tasks: [],
};

function taskReducer(state, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: uniqueId(), text: action.payload, complete: false },
        ],
      };

    case REMOVE:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case EDIT:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, text: action.payload.text }
            : task
        ),
      };

    case COMPLETE:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, complete: !task.complete }
            : task
        ),
      };

    case FILTER: {
      const complete = state.tasks.filter((task) => task.complete);
      const nonComplete = state.tasks.filter((task) => !task.complete);
      return {
        ...state,
        tasks: [...complete, ...nonComplete],
      };
    }

    default:
      return state;
  }
}

function TodoList() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <div className="App">
      <AddInputForm dispatch={dispatch} />

      <button className="filter-btn" onClick={() => dispatch({ type: FILTER })}>
        Filter
      </button>

      <ul>
        {state.tasks.map((todo) => (
          <Item todo={todo} dispatch={dispatch} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
