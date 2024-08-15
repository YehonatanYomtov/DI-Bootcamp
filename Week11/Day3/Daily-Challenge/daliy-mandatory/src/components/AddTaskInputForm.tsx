// Types
type AddTaskInputFormProps = {
  taskInput: React.RefObject<HTMLInputElement>;
  handleAddTaskSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function AddTaskInputForm({
  taskInput,
  handleAddTaskSubmit,
}: AddTaskInputFormProps) {
  return (
    <form onSubmit={handleAddTaskSubmit} className="add-task-form">
      <input
        type="text"
        name="taskInput"
        id="task-Input"
        ref={taskInput}
        placeholder="Write a task to the list..."
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default AddTaskInputForm;
