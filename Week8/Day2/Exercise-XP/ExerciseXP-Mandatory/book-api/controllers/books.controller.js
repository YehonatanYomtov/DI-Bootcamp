const {
  _getAllBooks,
  _getABook,
  _createABook,
} = require("../models/books.model.js");

async function getAllBooks(req, res) {
  try {
    const books = await _getAllBooks();
    res.status(200).json(books);
  } catch (err) {
    console.error(`Error fetching all books: ${err.message}`);
    res.status(500).json({ error: "Internal Server Error." });
  }
}

async function getABook(req, res) {
  const { bookId } = req.params;

  try {
    const book = await _getABook(bookId);

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.status(200).json(book);
  } catch (err) {
    console.error(`Error fetching book: ${err.message}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function createABook(req, res) {
  const { title, author, publishedyear } = req.body;

  try {
    const newBook = await _createABook(title, author, publishedyear);

    if (!title || !author || !publishedyear) {
      return res
        .status(400)
        .json({ error: "Title, author, and publishedyear are required." });
    }

    res.status(200).json(newBook);
  } catch (err) {
    console.error(`Error creating book: ${err.message}`);
    res.status(500).json({ error: "Internal Server Error." });
  }
}

module.exports = {
  getAllBooks,
  getABook,
  createABook,
};
