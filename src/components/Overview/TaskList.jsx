import React from 'react'
import Task from './Task'

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <div>
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <Task
                        task={task}
                        onChange={onChangeTask}
                        onDelete={onDeleteTask} />
                </li>
            ))}
        </ul>
      
    </div>
  )
}

export default TaskList
