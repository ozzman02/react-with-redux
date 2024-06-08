import { useState } from "react";
import BookEdit from "./BookEdit";

export default function BookShow({ book, onDeleteBook, onEditBook }) {

    const [showEdit, setShowEdit] = useState(false);

    const onDeleteClickHandler = () => {
        onDeleteBook(book.id);
    }

    const onEditClickHandler = () => {
        setShowEdit(!showEdit);
    }

    const onSubmitHandler = (id, title) => {
        setShowEdit(false);
        onEditBook(id, title);
    }

    let content = <h3>{book.title}</h3>;

    if (showEdit) {
        content = <BookEdit book={book} onSubmit={onSubmitHandler}/>
    }

    return (
        <div className="book-show">
            <img
                alt="books"
                src={`https://picsum.photos/seed/${book.id}/300/200`}
            >

            </img>
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={onEditClickHandler}>Edit</button>
                <button className="delete" onClick={onDeleteClickHandler}>Delete</button>
            </div>
        </div>
    )
}