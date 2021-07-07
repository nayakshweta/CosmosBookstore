import { useState, useEffect } from 'react';

export const useNavbarFilters = () => {
    const [filterQuery, setfilterQuery] = useState("");
    const [rating, setRating] = useState(0);

    useEffect(() => {
        setfilterQuery("&rating=" + rating);
    }, [rating]);

    return { filterQuery, setRating };
}