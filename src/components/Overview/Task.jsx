import React, { useState } from 'react'

const Task = ({ task, onChange, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);

    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input 
                    type="text"
                    value={task.text}
                    onChange={(e) => {
                        onChange({...task, text: e.target.value});
                    }} 
                />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }

  return (
    <label htmlFor="">
        <input 
            className='checkbox'
            type="checkbox"
            checked={task.done}
            onChange={(e) => {
                onChange({...task, done: e.target.checked});
            }} 
        />
        {taskContent}
        <button onClick={() => onDelete(task.id)}>Delete</button>
    </label>
  )
}

export default Task
