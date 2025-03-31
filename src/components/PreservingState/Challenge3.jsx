// Challenge 3 of 5: Reset a detail form 
// This is an editable contact list. You can edit the selected contact’s details and then either press “Save” to update it, or “Reset” to undo your changes.

// When you select a different contact (for example, Alice), the state updates but the form keeps showing the previous contact’s details. Fix it so that the form gets reset when the selected contact changes.

import React, { useState } from 'react'
import EditContact from './EditContact'

const initialContacts = [
    { id: 0, name: "Taylor", email: "taylor@mail.com" },
    { id: 1, name: "Alice", email: "alice@mail.com" },
    { id: 2, name: "Bob", email: "bob@mail.com" },
]

const ContactManager = () => {
    const [contacts, setContacts] = useState(initialContacts);
    const [selectedId, setSelectedId] = useState(0);

    const selectedContact = contacts.find(c => c.id === selectedId);

    const handleSave = (updatedData) => {
        const nextContacts = contacts.map((c) => {
            if (c.id === updatedData.id) {
                return updatedData;
            } else {
                return c;
            }
        });
        setContacts(nextContacts);
    }
  return (
    <div>
        <h2>Challenge 3 of 5: Reset a detail form</h2>
        <ContactList 
            contacts={contacts}
            selectedId={selectedId}
            onSelect={(id) => setSelectedId(id)} 
        />
        <hr />
        <EditContact 
            key={selectedId}
            initialData={selectedContact} 
            onSave={handleSave}
        />
    </div>
  )
}

export default ContactManager


const ContactList = ({ contacts, selectedId, onSelect }) => {
    return (
        <section>
            <ul className='new-contact-list'>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <button onClick={() => onSelect(contact.id)}>
                            {contact.id === selectedId ? <b>{contact.name}</b> : contact.name}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    )
}