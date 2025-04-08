import React from 'react'
import { useImmerReducer } from 'use-immer'
import AddTask from './AddTask'
import TaskList from './TaskList'

let nextId = 4;
const initialTasks = [
    { id: 0, text: "Visit Kafka Museum", done: true },
    { id: 1, text: "Watch a puppet show", done: false },
    { id: 2, text: "Lennon Wall pic", done: false },
]

const taskReducer = (draft, action) => {
    switch (action.type) {
        case "added": {
            draft.push({
                id: action.id,  
                text: action.text,
                done: false,
            });
            break;
        }
        case "changed": {
            const index = draft.findIndex((t) => t.id === action.task.id);
            draft[index] = action.task;
            break;
        }
        case "deleted": {
            return draft.filter((t) => t.id !== action.id);
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}

const TaskApp4 = () => {
    const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);

    const handleAddTask = (text) => {
        dispatch({
            type: "added",
            id: nextId++,
            text: text,
        });
    }
    const handleChangeTask = (task) => {
        dispatch({
            type: "changed",
            task: task,
        });
    }
    const handleDeleteTask = (taskId) => {
        dispatch({
            type: "deleted",
            id: taskId,
        });
    }

  return (
    <div>
        <h2>Prague itinerary</h2>
        <AddTask onAddTask={handleAddTask} />
        <TaskList
            tasks={tasks}
            onChangeTask={handleChangeTask}
            onDeleteTask={handleDeleteTask}
        />
      
    </div>
  )
}

export default TaskApp4
