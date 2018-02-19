import React from 'react';

export default ({ newGame }) => (
    <nav className="navbar">
        <h3>Memory Game</h3>
        <p id="new-game" onClick={newGame}>New Game</p>
    </nav>
);
