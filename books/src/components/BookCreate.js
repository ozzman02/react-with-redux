import { useState } from "react";

export default function BookCreate({ onCreateBook }) {
    
    const [title, setTitle] = useState('');

    const onTitleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        onCreateBook(title);
        setTitle('');
    }

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={formSubmitHandler}>
                <label>Title</label>
                <input className="input" value={title} onChange={onTitleChangeHandler}/>
                <button className="button">Create</button>
            </form>
        </div>
    );
}