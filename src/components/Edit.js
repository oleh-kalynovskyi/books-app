import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Edit() {

    const [books, setBooks] = useState({ 
        author:  Profile()[0].author,
        category:  Profile()[0].category, 
        id:  Profile()[0].id, 
        isbn:  Profile()[0].isbn, 
        title:  Profile()[0].title  
    });

    const [change, setChange] = useState(false);

    function Profile() {
        const id = useParams().id;
        const books = JSON.parse(localStorage.getItem('books'));
        const parseInt = Number.parseFloat( id );

        const filtered = books.filter( el => el.id === parseInt )

        return filtered
    }

    
    const id = useParams().id;
    function edit (e) {
        e.preventDefault();
        
        const bookss = JSON.parse(localStorage.getItem('books'));
        const parseInt = Number.parseFloat( id );

        const newBooks = bookss.map( item => { 
            if( item.id === parseInt) {
                item = books
            }
            return item
        })

        localStorage.setItem("books", JSON.stringify(newBooks));

        if( localStorage ) {
            setChange(true)
            setTimeout(() => { setChange(false) }, 1000);
        }
    }

    return (
        <form className="add-book-form">
        
            { change ? <h1 className="modal">Saved</h1> : null }

            <label htmlFor="author">Book name</label>
            <input 
                type="text" 
                name="" 
                id="" 
                value={books.title}
                onChange={(e) => setBooks({...books, title: e.target.value})} />

            <label htmlFor="author">Author name</label>
            <input 
                type="text" 
                name="" 
                id="" 
                value={books.author}
                onChange={(e) => setBooks({...books, author: e.target.value})} />

            <label htmlFor="author">Category</label>
            <select 
                required
                id="category"
                name="category"
                value={books.category}
                onChange={(e) => setBooks({...books, category: e.target.value})}>
                <option value="other">other</option>
                <option value="Action and Adventure">Action and Adventure</option>
                <option value="Classics">Classics</option>
                <option value="Detective and Mystery">Detective and Mystery</option>
                <option value="Historical Fiction">Historical Fiction</option>
                <option value="Horror">Horror</option>
            </select>

            <label htmlFor="author">ISBN</label>
            <input 
                type="text" 
                name="" 
                id="" 
                value={books.isbn}
                onChange={(e) => setBooks({...books, isbn: e.target.value})} />

            <div className="btn-grup-action">
                
                <button className="add-book-btn btn" onClick={edit}>
                    Set
                </button>

                <Link to={"/books-app"} >
                    <button className="add-book-btn btn">
                        Cancel
                    </button>
                </Link> 

            </div>
        </form>
    )
}