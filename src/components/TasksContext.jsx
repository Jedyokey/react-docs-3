import React, { createContext, useContext, useReducer } from 'react'

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

export const useTasks = () => {
    return useContext(TasksContext);
}

export const useTasksDispatch = () => {
    return useContext(TasksDispatchContext);
}

const initialTasks = [
    { id: 1, text: 'Philosopher’s Path', completed: false },
    { id: 2, text: 'Visit the temple', completed: false },
    { id: 3, text: 'Drink matcha', completed: false },
];

const tasksReducer = (tasks, action) => {
    switch (action.type) {
        case "added": {
            return [...tasks, {id: action.id, text: action.text, completed: false}];
        }
        case "changed": {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            })
        }
        case "deleted": {
            return tasks.filter(t => t.id !== action.id);   
        }
    }
}

export const TasksProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
            {children}
        </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}
