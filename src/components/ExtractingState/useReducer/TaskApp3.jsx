import React, { useCallback, useReducer } from 'react'
import AddTask from './AddTask';
import TaskList from './TaskList'

let nextId = 4;
const initialTasks = [
    { id: 1, text: "Learn React", done: true },
    { id: 2, text: "Build a project", done: false },
    { id: 3, text: "Refactor code", done: false }
]                            
    
const TaskApp3 = () => {
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

    const handleAddTask = useCallback((text) => {
        dispatch({
            type: "added",
            id: nextId++,
            text: text,
        });
    }, []);
    const handleChangeTask = useCallback((task) => {
        dispatch({
            type: "changed",
            task: task,
        })
    }, []);
    const handleDeleteTask = useCallback((taskId) => {
        dispatch({
            type: "deleted",
            id: taskId,
        })
    }, []); 

  return (
    <div>
        <h2>Developer Plans ( useReducer() )</h2>
        <AddTask onAddTask={handleAddTask} />
        <TaskList 
            tasks={tasks} 
            onChangeTask={handleChangeTask}
            onDeleteTask={handleDeleteTask} 
        />
    </div>
  )
}

export default TaskApp3


const taskReducer = (tasks, action) => {
    switch (action.type) {
        case "added": {
            return [
                ...tasks,
                {id: action.id, text: action.text, done: false},
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
            return tasks.filter((t) => t.id !== action.id);
        }
        default: {
            throw error("Unknown action: " + action.type);
        }
    }
}