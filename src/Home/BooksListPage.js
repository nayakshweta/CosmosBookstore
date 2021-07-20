import React from 'react';
import { BooksList } from './BooksList';
import { BooksListItem } from './BooksListItem';
import { useBooks } from './useBooks';
import { SortBar } from "./SortBar";
import { useEffect } from 'react';

export const BooksListPage = (props) => {
    const { isLoading, books: allBooks, sortby, setSortBy} = useBooks(props.filterQuery, props.searchText);

    const handleSort = (sortbyinput) => {
        setSortBy(sortbyinput);
    }

    return (
        <div>
            <SortBar sortby={sortby} handleSort={(e) => handleSort(e)}/>
            <BooksList 
                isLoading={isLoading}
                books={allBooks}
                ListItemComponent={BooksListItem}/>
        </div>

    )
}
