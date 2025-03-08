import React from 'react'
import AddTask2 from './AddTask2'
import TaskList2 from './TaskList2'
import { TasksProvider } from './TasksContext'

const TaskApp2 = () => {
  return (
    <TasksProvider>
        <h1>Day Off in Kyoto</h1>
        <AddTask2 />
        <TaskList2 />
    </TasksProvider>
    
  )
}

export default TaskApp2
