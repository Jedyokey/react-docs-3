// Challenge 1 of 4: Dispatch actions from event handlers 

// Currently, the event handlers in ContactList.js and Chat.js have // TODO comments. This is why typing into the input doesn’t work, and clicking on the buttons doesn’t change the selected recipient.

// Replace these two // TODOs with the code to dispatch the corresponding actions. To see the expected shape and the type of the actions, check the reducer in messengerReducer.js. The reducer is already written so you won’t need to change it. You only need to dispatch the actions in ContactList.js and Chat.js.

import React, { useReducer } from 'react'
import MessengerReducer from './MessengerReducer'
import ContactList from './ContactList'
import Chat from './Chat'
import { initialState } from './MessengerReducer'

const contacts = [
    {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
    {id: 1, name: 'Alice', email: 'alice@mail.com'},
    {id: 2, name: 'Bob', email: 'bob@mail.com'},
]

const Messenger = () => {
    // const [state, dispatch] = useReducer(MessengerReducer, contacts);
    const [state, dispatch] = useReducer(MessengerReducer, initialState); // Initialize state with initialState

    const message = state.messages[state.selectedId]; // Get the message for the selected contact
    const contact = contacts.find((c) => c.id === state.selectedId);
    
  return (
    <div className='messenger'>
        <ContactList 
          contacts={contacts}
          selectedId={state.selectedId}
          dispatch={dispatch} // Pass the dispatch function to ContactList
        />
        <Chat 
          key={contact.id} // Use contact.id as the key to force re-render when selectedId changes
          contact={contact}
          message={message}
          dispatch={dispatch} // Pass the dispatch function to Chat
        />
      
    </div>
  )
}

export default Messenger
