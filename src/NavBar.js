import React from 'react';


export const NavBar = () =>  (
    <header className="navbar">
        <nav role="navigation">
            <div className="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul className="menu">
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>About</li></a>
                </ul>
            </div>
        </nav>
        <div className="search-box">
            <div className="field">
                <input type="search" name="search" placeholder="Find your next book to read..." className="search-query"/>
                <button type="submit" className="btn search-submit-btn">Search</button>
            </div>
        </div>
    </header>
);