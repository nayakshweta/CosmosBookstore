import React from 'react';
import { BooksList } from './BooksList';
import { BooksListItem } from './BooksListItem';
import { useBooks } from './useBooks';
import { useParams } from 'react-router-dom';

export const BooksListPage = () => {
    const { isLoading, books: allBooks} = useBooks();
    
    return (
            <BooksList 
                isLoading={isLoading}
                books={allBooks}
                ListItemComponent={BooksListItem}/>
    )
}
