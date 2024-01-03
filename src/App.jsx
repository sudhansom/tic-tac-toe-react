import { useState } from 'react'

import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'
import './App.css'


function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  const handleSelection = (i, j) => {
    setActivePlayer(prev => prev === 'X' ? 'O' : 'X');
    setGameTurns(prev => {
      let currentPlayer = 'X';
      if(prev.length > 0 && prev[0].player === 'X'){
        currentPlayer = 'O';
      }
      const updatedTurns = [{square: {row: i, col: j}, player: currentPlayer}, ...prev];
      return updatedTurns;
    });
  }

  return (
   <main>
    <div id="game-container">
      <ol id="players">
        <Player initialName="Player 1" symbol="X" isActive={activePlayer==='X'} />
        <Player initialName="Player 2" symbol="O" isActive={activePlayer==='O'}/>
      </ol>
      <GameBoard onSelection={handleSelection} updatedTurns={gameTurns} />
    </div>
    <Log updatedTurns={gameTurns} />
   </main>
  )
}

export default App
