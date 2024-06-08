import { useState } from "react"
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

export default function App() {

  const [books, setBooks] = useState([]);

  const createBookHandler = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title: title }
    ];
    setBooks(updatedBooks);
  };

  const editBookByIdHandler = (id, title) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title }
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookByIdHandler = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDeleteBook={deleteBookByIdHandler} onEditBook={editBookByIdHandler} />
      <BookCreate onCreateBook={createBookHandler} />
    </div>
  );

}