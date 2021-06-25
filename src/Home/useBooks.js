import { useState, useEffect } from 'react';

export const useBooks = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [books, setBooks] = useState([]);

    const loadBooks = async () => {
        const response = await fetch('/books');
        const books = await response.json();
        setBooks(books);
        setIsLoading(false);
    }

    useEffect(() => {
        loadBooks();
    }, []);

    return { isLoading, books };
}