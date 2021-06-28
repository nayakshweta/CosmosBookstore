import { useState, useEffect } from 'react';

export const useBooks = () => {
    let url = "/books?limit=20";

    const [isLoading, setIsLoading] = useState(true);
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(0);

    const loadBooks = async () => {
        const response = await fetch(url + "&page=" + page);
        const new_books = await response.json();
        setBooks(old_books => {
            return [...old_books, ...new_books]
        });
        console.log(page, books);
        setIsLoading(false);
    }

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;

       setPage(page => page+1);

      }

    useEffect(() => {
        loadBooks();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [page]);

    return { isLoading, books };
}