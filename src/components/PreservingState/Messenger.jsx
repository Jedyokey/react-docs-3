import React, { useState } from 'react'
import Chat from './Chat'
import ContactList from './ContactList'

const contacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' }
]

const Messenger = () => {
    const [to, setTo] = useState(contacts[0]);
    // const [text, setText] = useState("");

    // const handleSend = (message) => {
    //     setText(prev => ({
    //         ...prev,
    //         [to.id]: [...prev[to.id], { text: message, sent: true }]
    //     }));
    // }

  return (
    <div>
        <ContactList
            contacts={contacts}
            selectedContact={to}
            onSelect={contact => setTo(contact)} 
        />  
        <Chat 
            key={to.id} 
            contact={to} 
            
            // onSend={handleSend}
            // onChange={message => setText(prev => ({
            //     ...prev,
            //     [to.id]: [...prev[to.id], { text: message, sent: false }]
            // }))}
        />
    </div>
  )
}

export default Messenger
