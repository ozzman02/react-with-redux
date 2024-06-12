import axios from "axios";
const { createContext, useState, useCallback } = require("react");

const BooksContext = createContext();

function BooksProvider({ children }) {

  const BOOKS_API_URL = "http://localhost:3001/books";

  const [books, setBooks] = useState([]);

  const fetchBooks =  useCallback(async () => {
    const response = await axios.get(BOOKS_API_URL);
    setBooks(response.data);
  }, []) ;

  const createBookHandler = async (title) => {
    const response = await axios.post(BOOKS_API_URL, {
      title: title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const editBookByIdHandler = async (id, title) => {
    const response = await axios.put(BOOKS_API_URL + `/${id}`, {
      title: title,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
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

  const valueToShare = {
    books: books,
    fetchBooks: fetchBooks,
    createBookHandler: createBookHandler,
    editBookByIdHandler: editBookByIdHandler,
    deleteBookByIdHandler: deleteBookByIdHandler
  };

  return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>;
}

export { BooksProvider }; // named export

export default BooksContext;
