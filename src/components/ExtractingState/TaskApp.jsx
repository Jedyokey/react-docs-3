import React, { useState } from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList'

let nextId = 3;
let initialTasks = [
    {id: 0, text: 'Visit Kafka Museum', done: true},
    {id: 1, text: 'Watch a puppet show', done: false},
    {id: 2, text: 'Lennon Wall pic', done: false},
]

const TaskApp = () => {
    const [tasks, setTasks] = useState(initialTasks);

    const handleAddTask = (text) => {
        setTasks([
            ...tasks, 
            {id: nextId++, text: text, done: false} 
        ])
    }

    const handleChangeTask = (task) => {
        setTasks(tasks.map((t) => {
            if (t.id === task.id) {
                return task;
            } else {
                return t;
            }
        }))
    }

    const handleDeleteTask = (taskId) => {
        setTasks(tasks.filter((t) => t.id !== taskId));
    }

  return (
    <div>
        <h2>Prague itinerary</h2>
        <AddTask 
            onAddTask={handleAddTask}
        />
        <TaskList 
            tasks={tasks}
            onChangeTask={handleChangeTask}
            onDeleteTask={handleDeleteTask}
        />
    </div>
  )
}

export default TaskApp
