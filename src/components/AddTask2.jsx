import React, { useState } from 'react'
import { useTasksDispatch } from './TasksContext'
 
// let nextId = 3;

const AddTask2 = () => {
    const [text, setText] = useState("");
    const dispatch = useTasksDispatch();

    const handleAddTask = () => {
        if (text.trim() === "") {
            alert("Task cannot be empty");
            return;
        }

        // Generate a unique ID using Date.now()
        const newTaskId = Date.now();

        // Dispatch the "added" action
        dispatch({
            type: "added",
            id: newTaskId,
            text: text,
        });

        // Clear the input field
        setText("");
    }

  return (
    <div>
        <input 
            type="text"
            placeholder='Add Task'
            value={text}
            onChange={(e) => setText(e.target.value)} 
        />

        <button onClick={handleAddTask}>Add</button>
      
    </div>
  )
}

export default AddTask2
