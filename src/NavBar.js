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