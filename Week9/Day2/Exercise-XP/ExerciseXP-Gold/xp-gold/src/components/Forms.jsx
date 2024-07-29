import { useState } from "react";

function Forms() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [text, setText] = useState("This is a TextArea Element.");
  const [selectedOption, setSelectedOption] = useState("Ford");
  const [errorMessage, setErrorMessage] = useState("");

  let header;
  if (username)
    header = (
      <h1>
        {username} {age}
      </h1>
    );

  function handleUsernameInput(e) {
    setUsername(e.target.value);
  }

  function handleAgeInput(e) {
    setAge(e.target.value);
  }

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleElectChange(e) {
    setSelectedOption(e.target.value);
  }

  function mySubmitHandler(e) {
    e.preventDefault();

    // const age = Number(e.target.age.value);
    // const username = e.target.username.value;

    if (isNaN(age)) {
      setErrorMessage("Age input must be a number");
    } else if (!username || !age) {
      setErrorMessage("Age input and Username input must be a filled");
    } else {
      alert(`You are submitting: ${username} ${age}`);
    }

    setUsername("");
    setAge("");
    setErrorMessage("");
  }

  return (
    <>
      {header}
      <form onSubmit={mySubmitHandler}>
        <h1>
          Hello {username} {age}
        </h1>

        <br />
        <br />

        <label>Enter your name:</label>
        <input
          onChange={handleUsernameInput}
          type="text"
          name="username"
          value={username}
        />

        <br />
        <br />

        <label>Enter your age:</label>
        <input onChange={handleAgeInput} type="text" name="age" value={age} />

        <br />
        <br />

        <div>
          <label htmlFor="textArea">Text Area in React:</label>
          <textarea value={text} id="textArea" onChange={handleTextChange} />
        </div>

        <br />
        <br />

        <div>
          <label htmlFor="options">Choose an option:</label>
          <select
            id="options"
            value={selectedOption}
            onChange={handleElectChange}
          >
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
          </select>
          <p>You selected: {selectedOption}</p>
        </div>

        <button>Submit</button>
        <div>{errorMessage ? errorMessage : ""}</div>
      </form>
    </>
  );
}

export default Forms;
