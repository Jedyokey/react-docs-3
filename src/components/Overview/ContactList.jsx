import React from 'react'

const ContactList = ({ contacts, selectedContact, onSelect }) => {
  return (
    <div className='contact-list'>
      <ul>
        {contacts.map(contact => (
          <li key={contact.email}>
            <button onClick={() => onSelect(contact)}>
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default ContactList
