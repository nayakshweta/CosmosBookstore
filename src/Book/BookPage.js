import React from 'react';
import { useParams } from 'react-router-dom';
import { useBook } from './useBook';
import { Rating } from "./Rating";
import { Genres } from "./Genres";

export const BookPage = () => {
    const { id } = useParams();
    const {book, setBook } = useBook(`/books/${id}`);

    return (
        <div className="book-page">
            <div className="book-img-and-metadata">
                <div className="book-img-container">
                    <img className="book-image" src={book.img}></img>
                </div>
                <div className="book-metadata">
                    <h1>{book.title}</h1>
                    <h2>By: {book.author}</h2>
                    <Rating rating={book.rating} totalratings={book.totalratings} />
                    <Genres genres={book.genre}/>
                    <p>
                        <h3>Summary:</h3>
                        {book.desc}
                    </p>
                </div>
            </div>
        </div>
    );
}