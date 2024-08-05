import { useRef, useState } from "react";

import { REMOVE, EDIT, COMPLETE } from "../App";

function Item({ todo, dispatch }) {
  const [editing, setEditing] = useState(false);
  const editInputRef = useRef(null);

  function handleRemoveTask(id) {
    dispatch({ type: REMOVE, payload: id });
  }

  function handleSubmitEdit(id) {
    const text = editInputRef.current.value.trim();
    if (!text) return;
    dispatch({ type: EDIT, payload: { id, text } });
    setEditing(false);
  }

  return (
    <li>
      {editing ? (
        <>
          <input type="text" ref={editInputRef} defaultValue={todo.text} />
          <button
            className="edit-btn"
            onClick={() => handleSubmitEdit(todo.id)}
          >
            Finish
          </button>
        </>
      ) : (
        <>
          <p
            className={todo.complete ? "done" : ""}
            onClick={() => dispatch({ type: COMPLETE, payload: todo.id })}
          >
            {todo.text}
          </p>
          <button className="edit-btn" onClick={() => setEditing(true)}>
            Edit
          </button>
        </>
      )}
      <button className="del-btn" onClick={() => handleRemoveTask(todo.id)}>
        x
      </button>
    </li>
  );
}

export default Item;
