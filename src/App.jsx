import { useState } from 'react'

import Player from './components/Player'
import GameBoard from './components/GameBoard'
import './App.css'


function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  const handleSelection = () => {
    setActivePlayer(prev => prev === 'X' ? 'O' : 'X');
  }

  return (
   <main>
    <div id="game-container">
      <ol id="players">
        <Player initialName="Player 1" symbol="X" isActive={activePlayer==='X'} />
        <Player initialName="Player 2" symbol="O" isActive={activePlayer==='O'}/>
      </ol>
      <GameBoard onSelection={handleSelection} activePlayer={activePlayer} />
    </div>
   </main>
  )
}

export default App
