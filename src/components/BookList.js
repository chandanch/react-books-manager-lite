import React, { useMemo } from "react";
import BookShow from "./BookShow";

function BookList({ books, onEdit, onDelete }) {
  const memoizedBooks = useMemo(() => {
    return books.map((book) => (
      <BookShow key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
    ));
  }, [books, onEdit, onDelete]);

  return <div className="book-list">{memoizedBooks}</div>;
}

export default BookList;
