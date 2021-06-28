import { useState, useEffect } from 'react';

export const useBooks = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [books, setBooks] = useState([]);

    const loadBooks = async () => {
        const response = await fetch(url);
        const books = await response.json();
        setBooks(books);
        setIsLoading(false);
    }

    useEffect(() => {
        loadBooks();
    }, []);

    return { isLoading, books };
}