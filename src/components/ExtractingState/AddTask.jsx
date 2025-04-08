import React, { useState } from 'react'

const AddTask = ({ onAddTask }) => {
    const [text, setText] = useState('');
    const [error, setError] = useState(null);

    const handleAddTask = () => {
        if (text.trim() === "") {
            setError("Please enter a task");
            return;
        }

        onAddTask(text);
        setText("");  
    }

  return (
    <div>
        <input 
            type="text" 
            value={text}
            onChange={(e) => {
                setText(e.target.value);
                setError(null); // Clear error when user types
            }}
        />
        
        <button onClick={handleAddTask}>
            Add
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  )
}

export default AddTask
