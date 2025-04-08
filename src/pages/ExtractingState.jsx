import React from 'react'
import TaskApp from '../components/ExtractingState/TaskApp'
import TaskApp3 from '../components/ExtractingState/useReducer/TaskApp3'
import TaskApp4 from '../components/ExtractingState/useImmerReducer/TaskApp4'
import Messenger from '../components/ExtractingState/Challenge1'

const ExtractingState = () => {
  return (
    <div>
        <h1>Extracting State Logic into a Reducer</h1>
        <p>In this section, we will learn how to extract state logic into a reducer.</p>
        <p>We will use the useReducer hook to manage the state of our components.</p>
        <p>We will also learn how to reset the state of our components using the useReducer hook.</p>
        <p>We will also learn how to extract state logic into a reducer function.</p>
        <p>We will also learn how to use the useReducer hook with complex state logic.</p>
        <hr />

        <TaskApp />
        <hr />
        
        {/* useReducer() */}
        <TaskApp3 />

        {/* useImmerReducer() */}
        <TaskApp4 />
        <hr />

        <h2>Challenge 1 of 4: Dispatch actions from event handlers</h2>
        <h3>Challenge 2 of 4: Clear the input on sending a message</h3>
        <Messenger />
    </div>
  )
}

export default ExtractingState
