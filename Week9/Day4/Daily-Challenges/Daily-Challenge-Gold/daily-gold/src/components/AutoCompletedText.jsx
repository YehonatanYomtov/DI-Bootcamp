import { useState } from "react";
import { v4 as uniqueId } from "uuid";
import countries from "../../data/countries.js";

function AutoCompletedText() {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  function handleRenderCountries(e) {
    const value = e.target.value.toLowerCase();
    setText(value);

    if (value) {
      const matches = countries.filter((c) => {
        const country = c.toLowerCase();
        if (country[0] === value[0]) {
          return country.includes(value);
        }
      });

      setSuggestions(matches.sort());
    } else {
      setSuggestions([]);
    }
  }

  function handleSelectInput(country) {
    console.log("country: ", country);
    setText(country);
    setSuggestions([]);
  }

  return (
    <div className="container">
      <h1>Auto Completed</h1>
      <input
        type="text"
        name="text"
        value={text}
        onChange={handleRenderCountries}
      />

      {suggestions.length > 0 && (
        <ul className="countries-display">
          {suggestions.map((sug) => (
            <li key={uniqueId()} onClick={() => handleSelectInput(sug)}>
              {sug}
            </li>
          ))}
        </ul>
      )}

      <div className="suggestions">Suggestions: {suggestions.length}</div>
    </div>
  );
}

export default AutoCompletedText;
