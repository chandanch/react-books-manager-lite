import useBooks from "./hooks/useBooks";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const { books, createBook, editBookById, deleteBookById } = useBooks();

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
