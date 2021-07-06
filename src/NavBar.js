import React from 'react';
import { useBooks } from './Home/useBooks';

export const NavBar = () =>  {

    const { isLoading, books, setSortBy, setRating} = useBooks();

    return (
        <header className="navbar">
            <nav role="navigation">
                <div className="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul className="menu">
                        <a href="#"><li>Filter By Rating</li></a>
                        <form className="ratingForm">
                            <button className="ratings-container" onClick={()=>setRating(4)}>
                                            <div className="star-ratings-sprite">
                                                <span style={{width: "80%"}} className="star-ratings-sprite-rating"></span>
                                            </div>
                                            <span className="star-ratings-sprite-rating-text"> & Up</span>
                            </button>
                            <button className="ratings-container" value="3">
                                            <div className="star-ratings-sprite">
                                                <span style={{width: "60%"}} className="star-ratings-sprite-rating"></span>
                                            </div>
                                            <span className="star-ratings-sprite-rating-text"> & Up</span>
                            </button>
                            <button className="ratings-container" value="2">
                                            <div className="star-ratings-sprite">
                                                <span style={{width: "40%"}} className="star-ratings-sprite-rating"></span>
                                            </div>
                                            <span className="star-ratings-sprite-rating-text"> & Up</span>
                            </button>
                            <button className="ratings-container" value="1">
                                            <div className="star-ratings-sprite">
                                                <span style={{width: "20%"}} className="star-ratings-sprite-rating"></span>
                                            </div>
                                            <span className="star-ratings-sprite-rating-text"> & Up</span>
                            </button>
                        </form>
                    </ul>
                </div>
                <a className="logo" href="/"><span className="logo-text">Cosmos Books</span></a>
            </nav>
            
            <div className="search-box">
                <div className="field">
                    <input type="search" name="search" placeholder="Find your next book to read..." className="search-query"/>
                    <button type="submit" className="search-submit-btn">Search</button>
                </div>
            </div>
            <div className="signup"><button className="signup-btn">Sign Up</button></div>
            <div className="login"><button className="login-btn">Login</button></div>
        </header>
    );
}

