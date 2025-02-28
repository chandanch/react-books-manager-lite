import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    books.push({ id: 222, title });
    setBooks(books);
  };

  return (
    <div>
      Books Count: {books.length}
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
