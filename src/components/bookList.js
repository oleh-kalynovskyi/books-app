import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function BookList() {
    
    useEffect( () => {
        const books = localStorage.getItem("books") 
        setBooks(books ? JSON.parse(books) : []) 
    }, [])

    const [books, setBooks] = useState( [ ] );
    
    const removeFromList = id => {
        const newBooks = books.filter(el => el.id !== id) ;
        setBooks(newBooks)
        
        localStorage.setItem("books", JSON.stringify(newBooks));
    }

    const empty = <h1>Your book list is empty, add book press on "Add Book"</h1>
    const booksList =  
    books && books.map( (el) => {
        return(
            <div className="book-wrapper"  key={el.id}>
                <h3> {el.title} </h3>
                <span> author: {el.author} </span>
                <span>category: {el.category} </span>
                <span>ISBN: {el.isbn} </span>

                <div className="btn-grup-action">
                
                    <Link to={"/Edit/" + el.id } >
                        <button className="add-book-btn btn">
                            Edit
                        </button>
                    </Link>

                    <button
                        onClick={ () => removeFromList(el.id) }
                        className="btn">
                        Delete
                    </button>
                </div>
            </div>
        )
    });
    
    return (
        <div className="book-card">
            { books.length > 0 ? booksList : empty }            
        </div>
    )
}
