import { useState, useEffect } from 'react';

export const useBooks = (rating, format, searchText) => {
    const [isLoading, setIsLoading] = useState(true);
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(0);
    const [sortby, setSortBy] = useState("");

    const loadBooks = async () => {
        let fetchUrl;
        if (searchText === "") {
            fetchUrl = "/books?limit=20" + "&page=" + page + "&rating=" + rating + "&format=" + format + "&sortby=" + sortby;
        } 
        else {
            fetchUrl = "/search?top=20" + "&skip=" + page*20 + "&search=" + searchText + "&orderby=" + sortby + "&rating=" + rating + "&format=" + format;
        }
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
    }, [page, sortby, rating, format, searchText]);

    useEffect(() => {
        setPage(0);
    }, [sortby]);

    useEffect(() => {
        setSortBy("");
        setPage(0);
    }, [rating, format]);

    useEffect(() => {
        setSortBy("");
        setPage(0);
    }, [searchText])

    return { isLoading, books, sortby, setSortBy };
}