import React from 'react';
import { useParams } from 'react-router-dom';
import { useBook } from './useBook';

export const BookPage = () => {
    const { id } = useParams();
    const {book, setBook } = useBook(`/books/${id}`);
    console.log(book);
    console.log(setBook);

    return (
        <div className="centered-contaner">
            <img src={book.img} alt={book.title}></img>
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
            <p>{book.desc}</p>
            <h3>Genre: {book.genre}</h3>
            <h4>Number of Pages: {book.pages}   Rating: {book.rating}   Reviews: {book.reviews}</h4>
        </div>
    );
}