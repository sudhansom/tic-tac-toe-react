import React, { useState } from 'react'

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

initialGameBoard[0][1] = 'O';

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    const handleClick = (i, j, s) => {

        setGameBoard(prev => {
            const temp = [...prev].map(innerArray => [...innerArray]);
            temp[i][j] = 'X';
            return temp;
        })
        
    }
  return (
   <ol id="game-board">
    {gameBoard.map((row, i)=> <li key={i} >
        <ol>
            {row.map((symbol, j) => <li key={j}><button onClick={()=>handleClick(i, j, symbol)}>{symbol}</button></li> )}
        </ol>
    </li>)}
   </ol>
  )
}

export default GameBoard