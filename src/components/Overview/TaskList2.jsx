import React, { useState, useContext } from 'react'
import { useTasks, useTasksDispatch } from './TasksContext'
import Task2 from './Task2';

const TaskList2 = () => {
    const tasks = useTasks();

  return (
    <ul>
        {tasks.map(task => (
            <li key={task.id}>
                <Task2 task={task} />
            </li>
        ))}
    </ul>
    
  )
}

export default TaskList2
