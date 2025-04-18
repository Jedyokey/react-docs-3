import React, { useState, useContext } from 'react'
import { TaskContext, TaskDispatchContext } from './TaskContext'

const MyTaskList = () => {
  const tasks = useContext(TaskContext);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  )
}

export default MyTaskList


const Task = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useContext(TaskDispatchContext);

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value
              }
            });
          }} />
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
    );
  }

  return (
    <label>
        <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                done: e.target.checked
              }
            });
        }}
        />
        {taskContent}
        <button onClick={() => {
          dispatch({
            type: "deleted",
            id: task.id
          })
        }}>
        Delete
        </button>
    </label>
);
}