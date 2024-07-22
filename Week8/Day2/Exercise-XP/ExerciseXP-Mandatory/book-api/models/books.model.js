const db = require("../config/db.js");

function _getAllBooks() {
  return db("books")
    .select("id", "title", "author", "publishedyear")
    .orderBy("id");
}

function _getABook(book_id) {
  return db("books").where({ id: book_id });
}

function _createABook(title, author, publishedyear) {
  return db("books")
    .insert({ title, author, publishedyear })
    .returning(["id", "title", "author", "publishedyear"]);
}

module.exports = {
  _getAllBooks,
  _getABook,
  _createABook,
};
