import { useState, useEffect } from 'react';

export const useBooks = (filterQuery) => {
    const [isLoading, setIsLoading] = useState(true);
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(0);
    const [sortby, setSortBy] = useState("");

    const loadBooks = async () => {
        const fetchUrl = "/books?limit=20" + "&page=" + page + "&sortby=" + sortby + filterQuery;
        console.log("Fetched url is", fetchUrl);
        const response = await fetch(fetchUrl);
        const new_books = await response.json();
        setBooks(old_books => {
                return page==0? [...new_books] : [...old_books, ...new_books]
        });
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
    }, [page, sortby, filterQuery]);

    useEffect(() => {
        setPage(0);
    }, [sortby]);

    useEffect(() => {
        setSortBy("");
        setPage(0);
    }, [filterQuery]);

    return { isLoading, books, sortby, setSortBy };
}