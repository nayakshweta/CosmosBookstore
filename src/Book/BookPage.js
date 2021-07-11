import React from 'react';
import { useParams } from 'react-router-dom';
import { useBook } from './useBook';
import { Rating } from "./Rating";
import { Genres } from "./Genres";
import { updateComment } from "./updateComment";
import { useRef } from 'react';

export const BookPage = () => {
    const { id } = useParams();
    const {book, setBook } = useBook(`/books/${id}`);

    const image = (book.img !== "") ? book.img : "/DefaultBookCover.png";

    const commentList = book.reviewcomments;
    const commentListMap = commentList === undefined? <div></div> : commentList.map((entry) => <li className="comment-entry">
                                                                                                        <b className="comment-name">{entry.name}</b> says
                                                                                                        <div className="comment-text">{entry.comment}</div>
                                                                                                </li>);

    let nameInput = useRef(null);
    let commentInput = useRef(null);
    
    const handleUpdateComment = () => {
        if (nameInput.current.value === "" || commentInput.current.value === "") {
            alert("Name and comment text cannot be blank.");
        }
        else {
            updateComment(`/books/${id}/comments`, {"name": nameInput.current.value, "comment": commentInput.current.value});
            nameInput.current.value = "";
            commentInput.current.value = "";
        }
    }


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
                <div className="comment-input-box">
                    <input className="comment-input-name" type="text" placeholder="Your name..." id="name" ref={nameInput} />
                    <textarea className="comment-input-text" type="text" placeholder="Add any comment..." id="comment" ref={commentInput} />
                    <div className="comment-button-div">
                        <button className="comment-button" id="add-comment" onClick={() => handleUpdateComment()}>Add a comment</button>
                    </div>
			    </div>
            </div>
        </div>
    );
}