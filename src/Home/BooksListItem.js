import React from 'react';
import { Link } from 'react-router-dom';

export const BooksListItem = ({ book }) => (
    <li>
        <a href={"/books/" + book._id }>
            <figure>
                <img src={book.img} alt={book.title}></img>
            </figure>
        </a>
    </li>
);