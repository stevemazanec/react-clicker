import React from "react";
import "./Navbar.css"

const Navbar = props => (
    <nav className="navbar navbar-expand-lg">
        <ul className="nav">
            <li className="brand">
                <a href="/">Clicky Game</a>
            </li>
            <li>Click an image to begin!</li>
            <li>Score: {props.correctGuesses} Highscore: {props.bestscore}</li>
        </ul>
    </nav>
);


export default Navbar;