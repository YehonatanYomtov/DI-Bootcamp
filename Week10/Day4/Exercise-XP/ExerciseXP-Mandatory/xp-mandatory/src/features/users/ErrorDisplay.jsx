import { useSelector } from "react-redux";

function ErrorDisplay() {
  const error = useSelector((state) => state.users.error);
  const { name, message } = error;
  return (
    <div className="err-display-container">
      <p>{name}!</p>
      <p>- {message} -</p>
    </div>
  );
}

export default ErrorDisplay;
