function ErrorDisplay({ error }) {
  return (
    <div>
      <p>{error.name}</p>
      <p>{error.message}</p>
    </div>
  );
}

export default ErrorDisplay;
