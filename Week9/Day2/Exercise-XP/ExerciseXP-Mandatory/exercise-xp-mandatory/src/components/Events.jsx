import { useState } from "react";

const clickMe = () => {
  alert("I was clicked");
};

const handleKeyDown = (event) => {
  if (event.key === "Enter")
    alert(`The ENTER key was pressed, your input is: ${event.target.value}`);
};

function Events() {
  const [isToggleOn, setIsToggleOn] = useState(true);
  return (
    <>
      <button onClick={clickMe}>Alert</button>

      <input
        type="text"
        placeholder="Press the ENTER key"
        onKeyDown={handleKeyDown}
      />

      <button onClick={() => setIsToggleOn((cur) => !cur)}>
        {isToggleOn ? "ON" : "OFF"}
      </button>
    </>
  );
}

export default Events;
