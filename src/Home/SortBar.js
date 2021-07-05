import React from 'react';

export const SortBar = (props) => {
    const handleSortby = event => {
        props.handleSort(event.target.value);
    }

    return (
        <div className="sortbar">
            <span className="sortbartext">
                <select className="sortselect" onChange={handleSortby}>
                    <option value="">Sort By ...</option>
                    <option value="rating">Rating</option>
                </select>
            </span>
        </div>
    );
};