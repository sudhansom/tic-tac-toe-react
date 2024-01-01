import React from 'react'

import "./Header.css"

const Header = () => {
  return (
    <div className='inner-container'>
      <div className="player">
        <span>PLAYER1</span>
        <span>Edit</span>
      </div>
      <div className="player">
        <span>PLAYER2</span>
        <span>Edit</span>
      </div>
    </div>
  )
}

export default Header