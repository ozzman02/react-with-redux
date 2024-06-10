import { useState } from "react"
import useBooksContext from "../hooks/UseBooksContext";

export default function BookEdit({ book, onSubmit }) {

    const { editBookByIdHandler } = useBooksContext();
    
    const [title, setTitle] = useState(book.title);

    const onTitleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        onSubmit();
        editBookByIdHandler(book.id, title);
    }

    return (
        <form className="book-edit" onSubmit={onSubmitHandler}>
            <label>Title</label>
            <input className="input" value={title} onChange={onTitleChangeHandler} />
            <button className="button is-primary">Save</button>
        </form>
    )
}