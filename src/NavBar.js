import React from 'react';


export const NavBar = () =>  (
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
);