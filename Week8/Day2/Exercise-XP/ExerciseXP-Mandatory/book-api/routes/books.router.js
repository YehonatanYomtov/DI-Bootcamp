const express = require("express");

const {
  getAllBooks,
  getABook,
  createABook,
} = require("../controllers/books.controller.js");

const router = express.Router();

router.get("/api/books", getAllBooks);
router.get("/api/books/:bookId", getABook);
router.post("/api/books", createABook);

module.exports = router;
