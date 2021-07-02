
import React from 'react'
import { Link } from 'react-router-dom';

export default function Dashbord() {
    
    return (
        <div className="dashbord">

            <ul className="btn-grup-action">

                <Link to="/books-app">
                    <li className="add-book-btn">
                        All Books
                    </li>
                </Link>

                <Link to="/add-book">
                    <li className="add-book-btn">
                        Add Book
                    </li>
                </Link>
            </ul>

        </div>
    )
}

