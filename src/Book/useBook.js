import { useState, useEffect } from 'react';

export const useBook = (url) => {
    const [book, setBook] = useState('');

    const loadBook = async () => {
        const response = await fetch(url);
        const book = await response.json();
        setBook(book);
    }

    useEffect(() => {
        loadBook();
    }, [book]);

    return { book, setBook };
}