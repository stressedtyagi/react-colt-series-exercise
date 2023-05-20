import React from "react"
import './NavBar.css';

const NavBar = ({onNewGame}) => {
    return (
        <header>
            <h1>Memory Game</h1>
            <nav>
                <li><a onClick={onNewGame}>New Game</a></li>
            </nav>
        </header>
    );
}

export default NavBar;