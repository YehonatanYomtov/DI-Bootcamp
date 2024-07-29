function Input({ type = "text", id, name, value, handleChange }) {
  return (
    <>
      <label htmlFor={id}>{name}: </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </>
  );
}

export default Input;
