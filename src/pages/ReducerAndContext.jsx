import React from 'react'
import TaskAppNew from '../components/ReducerAndContext/TaskAppNew'

const ReducerAndContext = () => {
  return (
    <div>
        <h1>Scaling up with Reducer and Context</h1>
        <p>In this section, we will learn how to use the useReducer hook and the Context API together to manage state in a more scalable way.</p>
        <p>We will create a simple task management app that allows users to add, remove, and toggle tasks.</p>
        <TaskAppNew />
      
    </div>
  )
}

export default ReducerAndContext
