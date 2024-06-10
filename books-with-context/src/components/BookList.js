import BookShow from "./BookShow";
import useBooksContext from "../hooks/UseBooksContext";

export default function BookList() {

    const { books } = useBooksContext();

    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} />
    });

    return (
        <div className="book-list">
            {renderedBooks}
        </div>
    );

}