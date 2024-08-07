function ErrorDisplay() {
  const { name, message } = error;
  return (
    <div className="err-display-container">
      <p>{name}!</p>
      <p>- {message} -</p>
    </div>
  );
}

export default ErrorDisplay;
