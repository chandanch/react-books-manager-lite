function BookList({ books }) {
  const renderedBooks = books.map((book) => {
    return <p> {book.title} </p>;
  });

  return (
    <div className="book-list">
      {/* optimize this!! */}
      {books.map((book) => {
        return <p> {book.title} </p>;
      })}
    </div>
  );
}

export default BookList;
