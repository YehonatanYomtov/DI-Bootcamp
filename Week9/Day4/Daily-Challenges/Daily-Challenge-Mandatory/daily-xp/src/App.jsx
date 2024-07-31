import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [text, setText] = useState("");
  const [postResponse, setPostResponse] = useState("");
  const [error, setError] = useState("");
  // const options = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/hello");

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.text();

        setData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    };

    try {
      const res = await fetch("http://localhost:3000/api/world", options);

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.text();

      setPostResponse(data);
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <>
      <h3>{data ? data : error}</h3>

      <form onSubmit={handleSubmit}>
        <h3>Post to Server</h3>

        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <h2>{postResponse}</h2>
    </>
  );
}

export default App;
