import React, { useState } from 'react'

const AddTask = ({ onAddTask }) => {
    const [text, setText] = useState('');

  return (
    <div>
        <input 
            type="text"
            value={text}
            placeholder='Add Task'
            onChange={(e) => setText(e.target.value)} 
        />
        <button onClick={() => {
            onAddTask(text);
            setText('');
        }}>
            Add
        </button>
      
    </div>
  )
}

export default AddTask
