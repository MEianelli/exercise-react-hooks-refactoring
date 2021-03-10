import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GameCell from './GameCell';
import GameContext from './GameContext';
import './GameBoard.css';


function GameBoard() {
  const { gameState, updateGame } = useContext(GameContext);
  return (
    <div className="game-board">
      {gameState.map((playerId, i) => (
        <GameCell
          id={i}
          key={i}
          onClick={() => updateGame(i)}
          content={playerId}
        />
      ))}
    </div>
  );
}

GameBoard.propTypes = {
  gameState: PropTypes.arrayOf(PropTypes.number).isRequired,
  updateGame: PropTypes.func.isRequired,
};

export default GameBoard;