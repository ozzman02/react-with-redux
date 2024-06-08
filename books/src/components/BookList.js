import BookShow from "./BookShow";

export default function BookList({ books, onDeleteBook, onEditBook }) {

    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} onDeleteBook={onDeleteBook} onEditBook={onEditBook} />
    });

    return (
        <div className="book-list">{renderedBooks}</div>
    );

}