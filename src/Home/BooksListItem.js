import React from 'react';
import { Link } from 'react-router-dom';

export const BooksListItem = ({ book }) => {

    const title = (book.title.length < 100 ) ? book.title : (book.title.substring(0, 100) + '...');
    const author = book.author.length < 100 ? book.author : book.author.substring(0,100) + '...';

    return (<li>
        <a href={"/books/" + book._id } target="_blank">
        <div 
            className="item" 
            style={{ backgroundImage: 'url(' + book.img + ')', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '450px', borderRadius: '1rem'}}>
        
            <div className="item-overlay">
                <div className="book-title">{title}</div>
                <div className="book-author">By {author}</div>
            </div>
        </div>
        
        </a>
    </li>);

};