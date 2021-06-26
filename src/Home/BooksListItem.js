import React from 'react';
import { Link } from 'react-router-dom';

export const BooksListItem = ({ book }) => (
    <li>
        <figure>
            <img className="img-book-cover" src={book.img} alt={book.title}></img>
            <figcaption>
                
                <h3>{book.title}</h3>
            </figcaption>
        </figure>
        <p>by {book.author}</p>
    </li>
);