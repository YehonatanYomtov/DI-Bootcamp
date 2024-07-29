// Exercise 1 : Use Data From A Form

// import { useState } from "react";

// function Book() {
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [genre, setGenre] = useState("");
//   const [yearPublished, setYearPublished] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (!title || !author || !genre || !yearPublished) {
//       return setErrorMessage("All inputs must be a filled");
//     }

//     const newBook = {
//       title,
//       author,
//       genre,
//       yearPublished,
//     };

//     console.log(newBook);

//     setTitle("");
//     setAuthor("");
//     setGenre("");
//     setYearPublished("");
//     setSubmitted(true);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>New Book</h1>
//       {submitted && <p>Data sent!</p>}

//       <label htmlFor="title">Title: </label>
//       <input
//         type="text"
//         id="title"
//         name="title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />

//       <br />
//       <br />

//       <label htmlFor="author">Author: </label>
//       <input
//         type="text"
//         id="author"
//         name="author"
//         value={author}
//         onChange={(e) => setAuthor(e.target.value)}
//       />

//       <br />
//       <br />

//       <label htmlFor="genre">Genre: </label>
//       <input
//         type="text"
//         id="genre"
//         name="genre"
//         value={genre}
//         onChange={(e) => setGenre(e.target.value)}
//       />

//       <br />
//       <br />

//       <label htmlFor="yearPublished">Year Published: </label>
//       <input
//         type="text"
//         id="yearPublished"
//         name="yearPublished"
//         value={yearPublished}
//         onChange={(e) => setYearPublished(e.target.value)}
//       />

//       <br />
//       <br />

//       {errorMessage && <div>{errorMessage}</div>}

//       <button>Submit</button>
//     </form>
//   );
// }

// export default Book;

// OR CAN DO THIS -->

import { useState } from "react";

function Book() {
  const [{ title, author, genre, yearPublished }, setNewBook] = useState({
    title: "",
    author: "",
    genre: "",
    yearPublished: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !author || !genre || !yearPublished) {
      return setErrorMessage("All inputs must be a filled.");
    }

    console.log({ title, author, genre, yearPublished });

    setNewBook({
      setTitle: "",
      setAuthor: "",
      setGenre: "",
      setYearPublished: "",
    });

    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Book</h1>
      {submitted && <p>Data sent!</p>}

      <label htmlFor="title">Title: </label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(e) =>
          setNewBook((cur) => ({ ...cur, title: e.target.value }))
        }
      />

      <br />
      <br />

      <label htmlFor="author">Author: </label>
      <input
        type="text"
        id="author"
        name="author"
        value={author}
        onChange={(e) =>
          setNewBook((cur) => ({ ...cur, author: e.target.value }))
        }
      />

      <br />
      <br />

      <label htmlFor="genre">Genre: </label>
      <input
        type="text"
        id="genre"
        name="genre"
        value={genre}
        onChange={(e) =>
          setNewBook((cur) => ({ ...cur, genre: e.target.value }))
        }
      />

      <br />
      <br />

      <label htmlFor="yearPublished">Year Published: </label>
      <input
        type="text"
        id="yearPublished"
        name="yearPublished"
        value={yearPublished}
        onChange={(e) =>
          setNewBook((cur) => ({ ...cur, yearPublished: e.target.value }))
        }
      />

      <br />
      <br />

      {errorMessage && <div>{errorMessage}</div>}

      <button>Submit</button>
    </form>
  );
}

export default Book;
