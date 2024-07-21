import express from "express";
const app = express();

app.use(express.json());

const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949,
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publishedYear: 1813,
  },
];

const newBookData = {
  title: "Hola Mila",
  author: "Yonski the Ponski",
  publishedYear: 2024,
};

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.get("/api/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const book = books.find((book) => book.id === id);

  if (!book) {
    res.status(404).json({ error: "Book not found." });
  }

  res.status(200).json(book);
});

app.post("/api/books", (req, res) => {
  const id = books.length++;
  const { title, author, publishedYear } = req.body;

  if (!title || !author || !publishedYear) {
    return res.status(400).json({
      error: "Title, Author, and Published Year require a value.",
    });
  }

  const newBook = {
    id,
    title,
    author,
    publishedYear,
  };

  books.push(newBook);

  res.status(201).json({
    message: "Book was created successfully.",
    book: newBook,
  });
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found." });
});

app.listen(3000, () => console.log("Listening on port 3000"));
