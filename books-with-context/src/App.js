import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from "./hooks/UseBooksContext";

export default function App() {
	
    // Using useContext
	// const { fetchBooks } = useContext(BooksContext);

    // With Custom Hook
    const { fetchBooks } = useBooksContext();

  	useEffect(() => {
    	fetchBooks();
  	}, []);

  	return (
    	<div className="app">
      		<h1>Reading List</h1>
      		<BookList />
      		<BookCreate />
    	</div>
  	);

}
