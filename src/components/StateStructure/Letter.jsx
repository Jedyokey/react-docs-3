import React from 'react'

const Letter = ({ letter, isSelected, onToggle }) => {
  return (
    <li className={isSelected ? "selected" : ""}>
        <label htmlFor="">
            <input 
                type="checkbox"
                checked={isSelected}
                onChange={() => onToggle(letter.id)} 
            />
            {letter.subject}
        </label>
    </li>
    
  )
}

export default Letter
