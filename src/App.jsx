import { useState } from 'react'

import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'
import './App.css'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  }
  return currentPlayer;
}


function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const currentPlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

    for (const turn of gameTurns){
        const {square, player} = turn;
        const { row, col} = square;
        gameBoard[row][col] = player;
    }

  const handleSelection = (i, j, s) => {
    // already disabled the button if the symbol exists. choose one way.
    // if(s){
    //   return;
    // }
    setGameTurns(prev => {
      const currentPlayer = deriveActivePlayer(prev);
      const updatedTurns = [{square: {row: i, col: j}, player: currentPlayer}, ...prev];
      return updatedTurns;
    });
  }

  return (
   <main>
    <div id="game-container">
      <ol id="players">
        <Player initialName="Player 1" symbol="X" isActive={currentPlayer==='X'} />
        <Player initialName="Player 2" symbol="O" isActive={currentPlayer==='O'}/>
      </ol>
      <GameBoard onSelection={handleSelection} board={gameBoard} />
    </div>
    <Log updatedTurns={gameTurns} />
   </main>
  )
}

export default App
