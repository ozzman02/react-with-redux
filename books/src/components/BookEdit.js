import { useState } from "react"

export default function BookEdit({ book, onSubmit }) {

    const [title, setTitle] = useState(book.title);

    const onTitleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        onSubmit(book.id, title);
    }

    return (
        <form className="book-edit" onSubmit={onSubmitHandler}>
            <label>Title</label>
            <input className="input" value={title} onChange={onTitleChangeHandler} />
            <button className="button is-primary">Save</button>
        </form>
    )
}