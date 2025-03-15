import React from 'react'
import FormState from '../components/Overview/FormState'
import Form2 from '../components/Overview/Form2'
import Accordion from '../components/Overview/Accordion'
import Messenger from '../components/Overview/Messenger'
import TaskApp from '../components/Overview/TaskApp'
import ManagePage from '../components/Overview/ManagePage'
import TaskApp2 from '../components/Overview/TaskApp2'

const ManageState = () => {
  return (
    <div>
        <FormState />
        <Form2 /> 
        <Accordion />
        <Messenger />
        <TaskApp />
        <ManagePage />
        <TaskApp2 />
    </div>
  )
}

export default ManageState
