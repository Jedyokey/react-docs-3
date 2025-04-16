import React, { useState, useContext } from 'react'
import { TaskDispatchContext } from './TaskContext';

let nextId = 3; // Initialize nextId to 3

const AddNewTask = () => {
    const [text, setText] = useState('');
    const [error, setError] = useState(null);

    const dispatch = useContext(TaskDispatchContext);

    const handleAddTask = () => { 
        if (text.trim() === "") {
            setError("Please enter a task");
            return;
        }

        // onAddTask(text);
        setText("");  
        dispatch({
            type: "added",
            id: nextId++, 
            text: text,
        });
        setError(null); // Clear error if task is added successfully
    }

  return (
    <>
        <input 
            type="text"
            placeholder='Add task'
            value={text}
            onChange={(e) => {
                setText(e.target.value);
                setError(null);
            }}
        />
        <button onClick={handleAddTask}>Add</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  )
}

export default AddNewTask
