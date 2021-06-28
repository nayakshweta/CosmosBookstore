import React from 'react';
import { BooksList } from './BooksList';
import { BooksListItem } from './BooksListItem';
import { useBooks } from './useBooks';
import { useParams } from 'react-router-dom';

export const BooksListPage = () => {
    const { isLoading, books: allBooks} = useBooks("/books?page=0&limit=20");
    
    return (
            <BooksList 
                isLoading={isLoading}
                books={allBooks}
                ListItemComponent={BooksListItem}/>
    )
}
