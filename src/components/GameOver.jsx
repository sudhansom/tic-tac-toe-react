import React from 'react'

const GameOver = ({winner}) => {
  return (
    <div id="game-over">
        <h2>Game Over!</h2>
        <p>{winner} won!</p>
        <button>RePlay</button>
    </div>
  )
}

export default GameOver