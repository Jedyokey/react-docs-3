import React from 'react'

const ContactList = ({ contacts, selectedId, dispatch }) => {
  return (
    <section className='contact-list'>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              className={selectedId === contact.id ? 'selected' : ''}
              onClick={() => dispatch({ type: 'changed_selection', contactId: contact.id })}
            >
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ContactList
