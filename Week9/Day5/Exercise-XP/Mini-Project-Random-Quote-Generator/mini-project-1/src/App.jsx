import "./App.css";
import { useState } from "react";
import quotes from "../db/QuotesDatabase.js";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function App() {
  const [usedQuotes, setUsedQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState({});
  const [color, setColor] = useState(getRandomColor());

  function getRandomQuote() {
    setColor(getRandomColor());
    const unusedQuotes = quotes.filter((quote) => !usedQuotes.includes(quote));

    if (unusedQuotes.length === 0) {
      setUsedQuotes([]);
      setCurrentQuote({});
      return;
    }

    const randomIndex = Math.floor(Math.random() * unusedQuotes.length);
    const randomQuote = unusedQuotes[randomIndex];

    setUsedQuotes([...usedQuotes, randomQuote]);
    setCurrentQuote(randomQuote);
  }

  const appStyle = {
    backgroundColor: color,
    color: color,
  };

  const quoteStyle = {
    color: color,
  };

  const buttonStyle = {
    backgroundColor: color,
  };

  return (
    <div className="app" style={appStyle}>
      <div className="quotes-display-container">
        {currentQuote.quote ? (
          <>
            <h2 style={quoteStyle}>"{currentQuote.quote}"</h2>
            <p style={quoteStyle}>-{currentQuote.author}-</p>
          </>
        ) : (
          <h2>Click the button to get a random quote!</h2>
        )}
        <button style={buttonStyle} onClick={getRandomQuote}>
          New quote
        </button>
      </div>
    </div>
  );
}

export default App;
