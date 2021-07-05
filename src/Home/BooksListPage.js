import React from 'react';
import { BooksList } from './BooksList';
import { BooksListItem } from './BooksListItem';
import { useBooks } from './useBooks';
import { SortBar } from "./SortBar";
import { useParams } from 'react-router-dom';

export const BooksListPage = () => {

    const { isLoading, books: allBooks, setSortBy} = useBooks();

    const handleSort = (sortbyinput) => {
        setSortBy(sortbyinput);
    }
    
    return (
        <div>
            <SortBar handleSort={(e) => handleSort(e)}/>
            <BooksList 
                isLoading={isLoading}
                books={allBooks}
                ListItemComponent={BooksListItem}/>
        </div>

    )
}
