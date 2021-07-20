import React from 'react';
import { useState } from 'react';

export const NavBar = ({rating, format, handleRating, handleFormat, handleSearch}) =>  {
    const [inputText, setInputText] = useState("");

    const handleInputChange = event => {
        setInputText(event.target.value);
    }

    const handleRatingFilter = input => {
        handleRating(input);
    }

    const handleFormatFilter = event => {
        handleFormat(event.target.value);
    }

    const handleSearchButton = () => {
        handleSearch(inputText);
    }

    const handleSearchInputEnter = (event) => {
        if (event.key === 'Enter') {
            handleSearch(inputText);
        }
    }

    const formatList = format.split(',');

    return (
        <header className="navbar">
            <nav role="navigation">
                <div className="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul className="menu">
                        <li>Filter By Rating</li>
                        <form className="ratingForm">
                            <button type="button" className={"ratings-container" + (rating===4?" selected":"")} value="4" onClick={() => handleRatingFilter(4)}>
                                <div className="star-ratings-sprite" value="4" >
                                    <span style={{width: "80%"}} className="star-ratings-sprite-rating" value="4"></span>
                                </div>
                                <span className="star-ratings-sprite-rating-text"> & Up</span>
                            </button>
                            <button type="button" className={"ratings-container" + (rating===3?" selected":"")} value="3" onClick={() => handleRatingFilter(3)}>
                                <div className="star-ratings-sprite">
                                    <span style={{width: "60%"}} className="star-ratings-sprite-rating"></span>
                                </div>
                                <span className="star-ratings-sprite-rating-text"> & Up</span>
                            </button>
                            <button type="button" className={"ratings-container" + (rating===2?" selected":"")} value="2" onClick={() => handleRatingFilter(2)}>
                                <div className="star-ratings-sprite">
                                    <span style={{width: "40%"}} className="star-ratings-sprite-rating"></span>
                                </div>
                                <span className="star-ratings-sprite-rating-text"> & Up</span>
                            </button>
                            <button type="button" className={"ratings-container" + (rating===1?" selected":"")} value="1" onClick={() => handleRatingFilter(1)}>
                                <div className="star-ratings-sprite">
                                    <span style={{width: "20%"}} className="star-ratings-sprite-rating"></span>
                                </div>
                                <span className="star-ratings-sprite-rating-text"> & Up</span>
                            </button>
                        </form>
                        <br />
                        <li>Filter By Format</li>
                        <form className="FormatForm">
                            <label className="FormatEntry">
                                <input type="checkbox" value="Paperback" id="Paperback" onClick={(e)=>handleFormatFilter(e)}/> Paperback
                                <span className={"checkmark" + (formatList.includes("Paperback")?" checked":"")}></span>
                            </label>
                            <label className="FormatEntry">
                                <input type="checkbox" value="Hardcover" id="Hardcover" onClick={(e)=>handleFormatFilter(e)}/> Hardcover
                                <span className={"checkmark" + (formatList.includes("Hardcover")?" checked":"")}></span>
                            </label>
                            <label className="FormatEntry">
                                <input type="checkbox" value="ebook" id="ebook" onClick={(e)=>handleFormatFilter(e)}/> eBook
                                <span className={"checkmark" + (formatList.includes("ebook")?" checked":"")}></span>
                            </label>                    
                            <label className="FormatEntry">
                                <input type="checkbox" value="Kindle Edition" id="Kindle Edition" onClick={(e)=>handleFormatFilter(e)}/> Kindle Edition
                                <span className={"checkmark" + (formatList.includes("Kindle Edition")?" checked":"")}></span>
                            </label>
                            <label className="FormatEntry">
                                <input type="checkbox" value="Audiobook" id="Audiobook" onClick={(e)=>handleFormatFilter(e)}/> Audiobook
                                <span className={"checkmark" + (formatList.includes("Audiobook")?" checked":"")}></span>
                            </label>
                        </form>
                    </ul>
                </div>
                <a className="logo" href="/"><span className="logo-text">Cosmos Books</span></a>
            </nav>
            
            <div className="search-box">
                <div className="field">
                    <input type="search" name="search" placeholder="Find your next book to read..." className="search-query" onChange={handleInputChange} onKeyPress={(e)=>handleSearchInputEnter(e)}/>
                    <button type="submit" className="search-submit-btn" onClick={handleSearchButton}>Search</button>
                </div>
            </div>
            <div className="signup"><button className="signup-btn">Sign Up</button></div>
            <div className="login"><button className="login-btn">Login</button></div>
        </header>
    );
}

