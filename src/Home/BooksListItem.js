import React from 'react';
import { Link } from 'react-router-dom';

export const BooksListItem = ({ book }) => (
    <li>
        <a href={"/books/" + book._id }>
        <div 
            className="item" 
            style={{ backgroundImage: 'url(' + book.img + ')', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '450px', borderRadius: '1rem'}}>
        
            <div className="item-overlay">
                <div className="book-title">{book.title}</div>
                <div className="book-author">By {book.author}</div>
            </div>
        </div>
        
        </a>
    </li>
);