import React from 'react';
import { useParams } from 'react-router-dom';
import { useBook } from './useBook';
import { Rating } from "./Rating";
import { Genres } from "./Genres";

export const BookPage = () => {
    const { id } = useParams();
    const {book, setBook } = useBook(`/books/${id}`);

    const image = (book.img !== "") ? book.img : "/DefaultBookCover.png";

    const commentList = book.reviewcomments;
    const commentListMap = commentList === undefined? <div></div> : commentList.map((entry) => <li className="comment-entry">
                                                                                                        <b className="comment-name">{entry.name}</b> says
                                                                                                        <div className="comment-text">{entry.comment}</div>
                                                                                                </li>);


    return (
        <div className="book-page">
            <div className="book-img-and-metadata">
                <div className="book-img-container">
                    <img className="book-image" src={image}></img>
                    {book.img === "" ? <div class="book-title">{(book.title.length < 100 ) ? book.title : (book.title.substring(0, 100) + '...')}</div> : <div />}
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
                    <p>
                        <b>Formats: &nbsp;</b> <i>{book.bookformat}</i>
                        <br />
                        <b>ISBN: &nbsp;</b> <i>{book.isbn}</i>
                    </p>
                </div>
            </div>
            <div className="comments-container">
                <h3>Comments:</h3>
                <ul className="comments-list">
                    {commentListMap}
                </ul>
            </div>
        </div>
    );
}