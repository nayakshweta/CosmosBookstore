import React from 'react';
import { Genre } from "./Genre";

export const Genres = ({genres}) => {

    if (!genres) {
        return <div></div>;
    }
    const genres_list = [...new Set(genres.split(','))];
    const genres_components_list = genres_list.map(genre => (
        <Genre genre={genre}/>));

    return (
        <div className="genres-container">
            <ul>
                {genres_components_list}
            </ul>
        </div>
    );
}