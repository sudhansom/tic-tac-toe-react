import React, { useState } from 'react'

const Player = ({initialName, symbol, isActive, handleSave}) => {
    const [ isEditable, setIsEditable ] = useState(false);
    const [name, setName] = useState(initialName);
    function handleEditClick(){
        setIsEditable(prev => !prev);
        if(isEditable){
            handleSave(name, symbol);
        }
    }
    function handleChange(e){
        setName(e.target.value);
    }
  return (
    <li style={{border: isActive? '1px solid green' : ''}}>
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