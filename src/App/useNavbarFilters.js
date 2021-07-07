import { useState, useEffect } from 'react';

export const useNavbarFilters = () => {
    const [filterQuery, setfilterQuery] = useState("");
    const [rating, setRating] = useState(0);
    const [format, setFormat] = useState("");

    useEffect(() => {
        setfilterQuery("&rating=" + rating + "&format=" + format);
    }, [rating, format]);

    return { filterQuery, rating, setRating, setFormat };
}