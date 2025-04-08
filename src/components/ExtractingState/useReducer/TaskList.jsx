import React, { useState } from 'react'

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  return ( 
    <ul>
        {tasks.map((task) => (
            <li key={task.id}>
                <Task
                    task={task}
                    onChange={onChangeTask}
                    onDelete={onDeleteTask} 
                />
            </li>
        ))}
    </ul>
  )
}

export default TaskList


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
                        onChange({
                            ...task,
                            text: e.target.value
                        });
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
        )
    }

    console.log(task);

    return (
        <label>
            <input 
                type="checkbox"
                checked={task.done} 
                onChange={(e) => {
                    onChange({
                        ...task,
                        done: e.target.checked
                    })
                }}
            />
            {taskContent}
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </label>
    )
}
