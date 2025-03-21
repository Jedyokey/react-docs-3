import React, { useState } from 'react'
import Chat from './Chat'
import ContactList from './ContactList'

const contacts = [
  { name: "Taylor", email: "taylor@mail.com" },
  { name: "Alice", email: "alice@mail.com" },
  { name: "Bob", email: "bob@mail.com" },
]

const Messenger = () => {
  const [to, setTo] = useState(contacts[0]);

  return (
    <div className='messenger'>
      <ContactList 
        contacts={contacts} 
        selectedContact={to} 
        onSelect={(contact) => setTo(contact)} 
      />

      <Chat contact={to} />
      
    </div>
  )
}

export default Messenger
