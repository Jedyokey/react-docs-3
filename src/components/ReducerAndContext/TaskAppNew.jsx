import React, { useReducer } from 'react'
import AddNewTask from './AddNewTask'
import MyTaskList from './MyTaskList'
import { TaskContext, TaskDispatchContext } from './TaskContext'

// let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];

const TaskAppNew = () => {
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
    
    // const handleAddTask = (text) => {
    //     dispatch({
    //         type: "added",
    //         id: nextId++,
    //         text: text,
    //     });
    // }

    // const handleChangedTask = (task) => {
    //     dispatch({
    //         type: "changed",
    //         task: task,
    //     })
    // }

    // const handleDeleteTask = (taskId) => {
    //     dispatch({
    //         type: "deleted",
    //         id: taskId,
    //     })
    // }

  return (
    <TaskContext.Provider value={tasks}>
        <TaskDispatchContext.Provider value={dispatch}>
            <h2>Day off in Kyoto</h2>
            <AddNewTask />

            <MyTaskList />
        </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  )
}

export default TaskAppNew


const taskReducer = (tasks, action) => {
    switch (action.type) {
        case "added": {
            return [
                ...tasks,
                {id: nextId++, text: action.text, done: false}
            ];
        }
        case "changed": {
            return tasks.map((t) => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case "deleted": {
            return tasks.filter(t => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}