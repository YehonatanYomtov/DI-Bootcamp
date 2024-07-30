import { useState } from "react";

import "./App.css";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  function addVote(index) {
    const updatedLanguages = [...languages];
    updatedLanguages[index].votes++;
    setLanguages(updatedLanguages);
  }

  return (
    <>
      {languages.map((lan, i) => {
        return (
          <div key={i}>
            <span>{lan.votes}</span>
            <span>{lan.name}</span>
            <button onClick={() => addVote(i)}>Click Here</button>
          </div>
        );
      })}
    </>
  );
}

export default App;
