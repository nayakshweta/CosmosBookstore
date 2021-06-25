import React from 'react';

export const BooksList = ({isLoading, books, ListItemComponent}) => 
    isLoading
        ? <p>Loading...</p>
        : books.map(book => (
                <ListItemComponent key={book._id} book={book} />
        ));
