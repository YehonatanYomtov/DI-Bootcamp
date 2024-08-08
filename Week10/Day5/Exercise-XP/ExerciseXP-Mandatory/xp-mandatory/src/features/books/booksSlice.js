import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  books: [
    { id: nanoid(), title: "Dracula", author: "Bram Stoker", genre: "Horror" },
    {
      id: nanoid(),
      title: "Frankenstein",
      author: "Mary Shelley",
      genre: "Horror",
    },
    {
      id: nanoid(),
      title: "The Shining",
      author: "Stephen King",
      genre: "Horror",
    },
    {
      id: nanoid(),
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
    },
    {
      id: nanoid(),
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      genre: "Fantasy",
    },
    {
      id: nanoid(),
      title: "A Game of Thrones",
      author: "George R.R. Martin",
      genre: "Fantasy",
    },
    {
      id: nanoid(),
      title: "Dune",
      author: "Frank Herbert",
      genre: "Science Fiction",
    },
    {
      id: nanoid(),
      title: "Neuromancer",
      author: "William Gibson",
      genre: "Science Fiction",
    },
    {
      id: nanoid(),
      title: "The Left Hand of Darkness",
      author: "Ursula K. Le Guin",
      genre: "Science Fiction",
    },
    {
      id: nanoid(),
      title: "The War of the Worlds",
      author: "H.G. Wells",
      genre: "Science Fiction",
    },
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,

  reducers: {},
});

export default booksSlice.reducer;
