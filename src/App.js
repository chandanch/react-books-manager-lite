import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log("Need to add book with:", title);
  };

  return (
    <div>
      Books Count: {books.length}
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
