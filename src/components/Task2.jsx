import React, {useState} from 'react'
// import { useContext } from 'react';
import { useTasksDispatch } from './TasksContext';

const Task2 = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useTasksDispatch();
    
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input 
                    type="text"
                    value={task.text}
                    onChange={(e) => {
                        dispatch({type: "changed", task: {...task, text: e.target.value}});
                    }} 
                />
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        )
    }

  return (
    <label htmlFor="">
        <input 
            type="checkbox"
            checked={task.completed}
            onChange={ e => {
                dispatch({type: "changed", task: {...task, completed: e.target.checked}});
            }} 
        />

        {taskContent}
        <button onClick={() => {
            dispatch({type: "deleted", id: task.id});
        }}>
            Delete
        </button>
    </label>
  )
}

export default Task2
