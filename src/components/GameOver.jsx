import React from 'react'

const GameOver = ({winner, onRestart, player}) => {
    let message = `${player[winner]} won the game!`
    if(!winner){
        message = "Nobody won. It's a draw";
    }
    
  return (
    <div id="game-over">
        <h2>Game Over!</h2>
        <p>{message}</p>
        <button onClick={onRestart}>RePlay</button>
    </div>
  )
}

export default GameOver