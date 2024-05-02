import React from 'react';
import "./Navbar.css";

function Navbar(){
    return(
        <nav className="navbar">
            <ul className="nav-links">
                <li className="nav-item"><a href="#">Home</a></li> 
                <li className="nav-item"><a href="#">Products</a></li> 
                <li className="nav-item"><a href="#">Support</a></li>
                <li className="nav-item"><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
