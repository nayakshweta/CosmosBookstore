import { useState, useEffect } from 'react';

export const useNavbarFilters = () => {
    const [filterQuery, setfilterQuery] = useState("");
    const [rating, setRating] = useState(0);
    const [format, setFormat] = useState("");
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        setfilterQuery("&rating=" + rating + "&format=" + format);
    }, [rating, format]);

    useEffect(() => {
        setRating(0);
        setFormat("");
    }, [searchText])
  
    return { filterQuery, rating, setRating, setFormat, searchText, setSearchText };
}