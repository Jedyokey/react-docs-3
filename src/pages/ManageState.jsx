import React from 'react'
import FormState from '../components/FormState'
import Form2 from '../components/Form2'
import Accordion from '../components/Accordion'
import Messenger from '../components/Messenger'
import TaskApp from '../components/TaskApp'
import ManagePage from '../components/ManagePage'
import TaskApp2 from '../components/TaskApp2'

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
