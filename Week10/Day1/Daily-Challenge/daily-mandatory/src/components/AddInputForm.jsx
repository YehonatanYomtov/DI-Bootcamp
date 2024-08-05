import { useRef } from "react";
import { ADD } from "../App";

function AddInputForm({ dispatch }) {
  const inputRef = useRef(null);

  function handleAddTask(e) {
    e.preventDefault();

    const value = inputRef.current.value.trim();
    if (!value) return;
    dispatch({ type: ADD, payload: value });
    inputRef.current.value = "";
  }

  return (
    <form onSubmit={handleAddTask}>
      <input ref={inputRef} type="text" placeholder="Add a new task..." />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddInputForm;
