import { useContext, useState } from "react";
import BooksContext from "../context/BooksContext";

export default function BookCreate() {

    const { createBookHandler } = useContext(BooksContext); 
    
    const [title, setTitle] = useState('');

    const onTitleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        createBookHandler(title);
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