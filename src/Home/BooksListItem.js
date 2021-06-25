import React from 'react';
import { Link } from 'react-router-dom';

export const BooksListItem = ({ book }) => (
    <div className="list-item">
        <Link to={`/books/${book._id}`}>
            <img src={book.img} alt={book.title}></img>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
        </Link>
    </div>
);