import React, { useState } from 'react'

const Player = ({name, symbol}) => {
    const [ isEditable, setIsEditable ] = useState(false);
    function handleEditClick(){
        setIsEditable(prev => !prev);
    }
  return (
    <li>
        <span className="player">
            { isEditable && <input type='text' required/>}
            {!isEditable && <span className="player-name">{name}</span>}
            <span className='player-symbol'>{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditable? 'Save' : 'Edit'}</button>
    </li>
  )
}

export default Player