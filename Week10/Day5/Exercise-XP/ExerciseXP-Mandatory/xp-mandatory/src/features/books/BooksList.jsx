import { useSelector } from "react-redux";
import { useState } from "react";

// Components
import SelectionFilters from "./SelectionFilters";
import Book from "./Book";

// Selectors
import {
  selectBooks,
  selectFantasyBooks,
  selectHorrorBooks,
  selectScienceFictionBooks,
} from "./booksSelectors";

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
      case "All":
      default:
        return books;
    }
  };

  return (
    <div>
      <SelectionFilters setGenre={setGenre} />

      <div className="books-list-container">
        {books &&
          getBooksByGenre().map((book) => <Book book={book} key={book.id} />)}
      </div>
    </div>
  );
}

export default BooksList;
