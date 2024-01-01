import React from 'react'

import "./Header.css"
import Player from '../Player'

const Header = () => {
  return (
    <div className='inner-container'>
     <Player initialName="player1"/>
     <Player initialName="player2"/>
    </div>
  )
}

export default Header