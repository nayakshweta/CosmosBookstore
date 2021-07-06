import { useState, useEffect } from 'react';

export const useBooks = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(0);
    const [sortby, setSortBy] = useState("");
    const [rating, setRating] = useState(0);

    const loadBooks = async () => {
        let url = "/books?limit=20".concat("&sortby=").concat(sortby).concat("&rating=").concat(rating);
        console.log(url);
        const response = await fetch(url + "&page=" + page);
        const new_books = await response.json();
        if (page==0) {
            setBooks(new_books);
        }
        else {
            setBooks(old_books => {
                return [...old_books, ...new_books]
            });
        }
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
    }, [page, sortby, rating]);

    useEffect(() => {
        setPage(0);
    }, [sortby, rating]);

    return { isLoading, books, setSortBy, setRating };
}