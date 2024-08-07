function TaskInputForm({ addTask }) {
  const inputRef = useRef(null);

  function handleAddTodoTask(e) {
    e.preventDefault();

    if (!inputRef.current.value) return;

    const inputValue = inputRef.current.value;
    addTask(inputValue);

    inputRef.current.value = "";
  }

  return (
    <form onSubmit={handleAddTodoTask}>
      <input type="text" placeholder="Add a task..." ref={inputRef} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddItem;
