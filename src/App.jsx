import { useState } from 'react'

import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'
import './App.css'
import GameOver from './components/GameOver'
import { WINNING_COMBINATIONS } from './winning-combinatin'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const PLAYER = {
  X: 'Player 1',
  O: 'Player 2',
}

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  }
  return currentPlayer;
}


function App() {
  const [ player, setPlayer ] = useState(PLAYER);
  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map(inner => [...inner])];

    for (const turn of gameTurns){
        const {square, player} = turn;
        const { row, col} = square;
        gameBoard[row][col] = player;
    }
    let winner;
  
  for (const combination of WINNING_COMBINATIONS){
    const first = gameBoard[combination[0].row][combination[0].col];
    const second = gameBoard[combination[1].row][combination[1].col];
    const third = gameBoard[combination[2].row][combination[2].col];

    if(first && first === second && first === third) {
      winner = first;
    }
  }
  let draw = gameTurns.length === 9 && !winner;

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
  function handleRematch(){
    setGameTurns([]);
  }

  function handleSave (name, symbol){
    setPlayer(prev => {return {... prev, [symbol]:name}});
  }

  return (
   <main>
    <div id="game-container">
      <ol id="players">
        <Player initialName={player.X} symbol="X" handleSave={handleSave} isActive={currentPlayer==='X'} />
        <Player initialName={player.O} symbol="O" handleSave={handleSave} isActive={currentPlayer==='O'}/>
      </ol>
      {(winner || draw)  && <GameOver winner={winner} onRestart={handleRematch} player={player}/>}
      <GameBoard onSelection={handleSelection} board={gameBoard}/>
    </div>
    <Log updatedTurns={gameTurns} />
   </main>
  )
}

export default App
