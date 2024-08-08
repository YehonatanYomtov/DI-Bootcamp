import { useSelector } from "react-redux";

// Components
import SelectionFilters from "./SelectionFilters";
import Book from "./Book";

// Custom Hooks
import { selectBooks } from "./booksSelectors";

// Selectors
import {
  selectFantasyBooks,
  selectHorrorBooks,
  selectScienceFictionBooks,
} from "./booksSelectors";
import { useState } from "react";

function BooksList() {
  const [genre, setGenre] = useState("");

  const books = useSelector(selectBooks);
  const horrorBooks = useSelector(selectHorrorBooks);
  const fantasyBooks = useSelector(selectFantasyBooks);
  const scienceFictionBooks = useSelector(selectScienceFictionBooks);

  const getBooksByGenre = () => {
    switch (genre) {
      case "Horror":
        return horrorBooks;
      case "Fantasy":
        return fantasyBooks;
      case "Science Fiction":
        return scienceFictionBooks;
      default:
        return books;
    }
  };

  return (
    <div className="books-main-container">
      <SelectionFilters setGenre={setGenre} />

      <div className="books-list-container">
        {books &&
          getBooksByGenre().map((book) => <Book book={book} key={book.id} />)}
      </div>
    </div>
  );
}

export default BooksList;
