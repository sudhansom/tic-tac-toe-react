import React, { useState } from 'react'

const Player = ({initialName, symbol}) => {
    const [ isEditable, setIsEditable ] = useState(false);
    const [name, setName] = useState(initialName);
    function handleEditClick(){
        setIsEditable(prev => !prev);
    }
    function handleChange(e){
        setName(e.target.value);
    }
  return (
    <li>
        <span className="player">
            { isEditable && <input type='text' value={name} required onChange={handleChange}/>}
            {!isEditable && <span className="player-name">{name}</span>}
            <span className='player-symbol'>{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditable? 'Save' : 'Edit'}</button>
    </li>
  )
}

export default Player