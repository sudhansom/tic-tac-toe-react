import React, { useState } from 'react'

import "./Player.css"

const Player = ({initialName}) => {
    const [name, setName] = useState(initialName);
    const [isEdit, setIsEdit] = useState(false);
    const handleClick = () => {
        setIsEdit(prev => !isEdit)
    }
    const handleChange = (event) => {
        setName(event.target.value);
    }
  return (
    <div className="player">
        {!isEdit && <span onClick={handleClick} className='save-edit'>{name}</span>}
        {isEdit && <input type="text" value={name} onChange={handleChange}/>}
        <span className='save-edit' onClick={handleClick}>{isEdit? 'Save' : 'Edit'}</span>
      </div>
  )
}

export default Player