import React from 'react';

export const BooksListItem = ({ book }) => (
    <div className="list-item">
        <img src={book.img} alt={book.title} style="width:100%"></img>
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>
    </div>
);