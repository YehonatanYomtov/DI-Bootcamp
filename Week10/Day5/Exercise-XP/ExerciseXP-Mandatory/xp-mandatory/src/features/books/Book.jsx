function Book({ book }) {
  const { title, author, genre } = book;

  return (
    <div className="book">
      <h3>{title}</h3>
      <div>
        <strong>Author</strong>: <p>{author}</p>
      </div>
      <div>
        <strong>Genre</strong>: <p>{genre}</p>
      </div>
    </div>
  );
}

export default Book;
