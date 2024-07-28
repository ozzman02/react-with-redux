import { useEffect, useState } from "react"
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

export default function App() {

  const BOOKS_API_URL = 'http://localhost:3001/books';

  const [books, setBooks] = useState([]);

  /***************************** Mock Data *****************************/

  /*
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
  */

  /*********************************************************************/

  const fetchBooks = async () => {
    const response = await axios.get(BOOKS_API_URL);
    setBooks(response.data);
  }

  const createBookHandler = async (title) => {
    const response = await axios.post(BOOKS_API_URL, {
      title: title
    });
    const updatedBooks = [ ...books, response.data ];
    setBooks(updatedBooks);
  };

  const editBookByIdHandler = async (id, title) => {
    const response = await axios.put(BOOKS_API_URL + `/${id}`, {
      title: title
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        // here we are creating a new object
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookByIdHandler = async (id) => {
    await axios.delete(BOOKS_API_URL + `/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  useEffect(() => {
    fetchBooks()
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDeleteBook={deleteBookByIdHandler} onEditBook={editBookByIdHandler} />
      <BookCreate onCreateBook={createBookHandler} />
    </div>
  );

}