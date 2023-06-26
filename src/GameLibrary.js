import React, { useState } from "react";
import "./GameLibrary.css";

const GameLibrary = () => {
  const [games, setGames] = useState([]);

  const addGame = (game) => {
    setGames([...games, game]);
  };

  const removeGame = (index) => {
    const updatedGames = [...games];
    updatedGames.splice(index, 1);
    setGames(updatedGames);
  };

  return (
    <div className="game-library">
      <h1>Game Library</h1>
      <div className="game-buttons">
        <button onClick={() => addGame("Game 1")}>Add Game 1</button>
        <button onClick={() => addGame("Game 2")}>Add Game 2</button>
      </div>
      <ul className="game-list">
        {games.map((game, index) => (
          <li key={index}>
            {game}
            <button onClick={() => removeGame(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameLibrary;
