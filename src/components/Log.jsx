import React from 'react'

const Log = ({updatedTurns, player}) => {
  return (
    <ol id="log">
    {updatedTurns.length > 0 && updatedTurns.map((turn, index) => <li key={index}>{`${player[turn.player]} moved to (${turn.square.row}, ${turn.square.col})`}</li>)}
    </ol>
  )
}

export default Log