import { useState } from "react";

function calcFunc(value1, value2, operation) {
  const a = Number(value1);
  const b = Number(value2);

  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return b !== 0 ? a / b : "Cannot divide by zero";
    default:
      return;
  }
}

function Form() {
  const [selectedCalc, setSelectedCalc] = useState("add");
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [sum, setSum] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    setSum(calcFunc(inputValue1, inputValue2, selectedCalc));
  }

  return (
    <div className="main-container">
      <h1>Calculator</h1>

      <form onSubmit={handleSubmit}>
        <div className="select-container">
          <label htmlFor="operation-select">Choose an operation:</label>
          <select
            id="operation-select"
            onChange={(e) => setSelectedCalc(e.target.value)}
          >
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
          </select>
        </div>

        <div className="inputs-container">
          <input
            type="number"
            name="input1"
            value={inputValue1}
            onChange={(e) => setInputValue1(e.target.value)}
          />

          <input
            type="number"
            name="input2"
            value={inputValue2}
            onChange={(e) => setInputValue2(e.target.value)}
          />
        </div>

        <button type="submit">{selectedCalc} Them</button>
      </form>

      <div className="sum">{sum}</div>
    </div>
  );
}

export default Form;
