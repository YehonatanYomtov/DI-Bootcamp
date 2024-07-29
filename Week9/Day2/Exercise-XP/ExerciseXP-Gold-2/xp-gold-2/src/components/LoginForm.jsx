import { useState } from "react";
import Input from "./Input";

function LoginForm() {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    number: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { firstName, lastName, number, email } = newUser;

  function reset() {
    setSubmitted(false);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setNewUser((preUser) => ({ ...preUser, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!firstName || !lastName || !number || !email) {
      return setErrorMessage("All inputs must be a filled");
    }

    if (isNaN(number)) {
      return setErrorMessage("Number needs to be an integer.");
    }

    setSubmitted(true);
  }

  return !submitted ? (
    <form onSubmit={handleSubmit} className="submit-result container">
      <h1>Welcome</h1>

      <h3>Please provide your information below.</h3>

      <Input
        id="firstName"
        name="firstName"
        value={firstName}
        handleChange={handleChange}
      />

      <Input
        id="lastName"
        name="lastName"
        value={lastName}
        handleChange={handleChange}
      />

      <Input
        id="number"
        name="number"
        value={number}
        handleChange={handleChange}
      />

      <Input
        type="email"
        id="email"
        name="email"
        value={email}
        handleChange={handleChange}
      />

      {errorMessage && <div className="err-msg">{errorMessage}</div>}
      <button>Submit</button>
    </form>
  ) : (
    <div className="submit-result container">
      <h4>
        {firstName}, {lastName}
      </h4>

      <p>
        {number} | {email}
      </p>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default LoginForm;
