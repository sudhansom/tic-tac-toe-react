import React from 'react'

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

const GameBoard = () => {
  return (
   <ol id="game-board">
    {initialGameBoard.map((row, i)=> <li key={i} >
        <ol>
            {row.map((symbol, symbolIndex) => <li key={symbolIndex}><button>{symbol}</button></li> )}
        </ol>
    </li>)}
   </ol>
  )
}

export default GameBoard