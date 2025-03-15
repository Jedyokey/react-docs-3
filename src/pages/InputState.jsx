import React from 'react'
import Form from '../components/InputReact/Form'
import Picture from '../components/InputReact/Challenge1'
import EditProfile from '../components/InputReact/Challenge2'

const InputState = () => {
  return (
    <div>
        <Form />

        <h3 style={{margin: "10px 0"}}>Challenge 1 of 3: Add and remove a CSS class </h3>
        <Picture />
        <EditProfile />
    </div>
  )
}

export default InputState
