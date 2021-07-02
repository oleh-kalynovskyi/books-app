import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function AddBook() {
    
    useEffect( () => {
        const books = localStorage.getItem("books") 
        setBooks(books ? JSON.parse(books) : []) 
    }, [])

    const [book, setBook] = useState( '' );
    const [change, setChange] = useState(false);

    const handleSubmit = ( e ) => {
        e.preventDefault();
        e.target.reset();

        const bookss = [ ...books, book ];
        setBooks(bookss);
        localStorage.setItem("books", JSON.stringify(bookss));

        setChange(true)
        setTimeout(() => { setChange(false) }, 1000);
    }

    const [books, setBooks] = useState( [ ] );

    const id = Math.random()
    return (
        <div className="add-book-comp">

            { change ? <h1 className="modal">Book added</h1> : null }

            <h1>
                Add book to List
            </h1>

            <form 
                className="add-book-form"
                name="book"
                onSubmit={ handleSubmit } >

                <label htmlFor="title">Book name</label>
                <input 
                    required
                    autoComplete="off"
                    id="title"
                    type="text" 
                    name="title"
                    onChange={(e) => setBook({...book, title: e.target.value, id })}  />  {/* id - here setting individual id number */}

                <label htmlFor="author">Author name</label>
                <input 
                    required
                    autoComplete="off"
                    id="author"
                    type="text" 
                    name="author"
                    onChange={(e) => setBook({...book, author: e.target.value})} />
                    
                <label htmlFor="category">Category</label>
                <select 
                    required
                    autoComplete="off"
                    id="category"
                    name="category"
                    onChange={(e) => setBook({...book, category: e.target.value})}>
                    <option value="other">other</option>
                    <option value="Action and Adventure">Action and Adventure</option>
                    <option value="Classics">Classics</option>
                    <option value="Detective and Mystery">Detective and Mystery</option>
                    <option value="Historical Fiction">Historical Fiction</option>
                    <option value="Horror">Horror</option>
                </select>

                <label htmlFor="isbn">ISBN</label>
                <input 
                    required
                    autoComplete="off"
                    id="isbn"
                    type="number" 
                    name="isbn"
                    onChange={(e) => setBook({...book, isbn: e.target.value })} />

                <div className="btn-grup-action">

                    <button className="add-book-btn btn">
                        Add book
                    </button>

                    <Link to={"/books-app"} >
                        <button className="add-book-btn btn">
                            back to Book list
                        </button>
                    </Link>

                </div>

            </form>
        </div>
    )
};
