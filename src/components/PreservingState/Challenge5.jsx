// Challenge 5 of 5: Fix misplaced state in the list 

// In this list, each Contact has state that determines whether “Show email” has been pressed for it. Press “Show email” for Alice, and then tick the “Show in reverse order” checkbox. You will notice that it’s Taylor’s email that is expanded now, but Alice’s—which has moved to the bottom—appears collapsed.

// Fix it so that the expanded state is associated with each contact, regardless of the chosen ordering.

import React, { useState } from 'react'
import Contact from './Contact'

const contacts = [
    { id: 0, name: 'Alice', email: 'alice@mail.com' },
    { id: 1, name: 'Bob', email: 'bob@mail.com' },
    { id: 2, name: 'Taylor', email: 'taylor@mail.com' }
]

const Challenge5 = () => {
    const [reverse, setReverse] = useState(false);

    const displayedContacts = [...contacts];
    if (reverse) {
        displayedContacts.reverse();
    }

  return (
    <div>
        <h2>Challenge 5 of 5: Fix misplaced state in the list</h2>
        <label>
            <input 
                type="checkbox"
                checked={reverse} 
                onChange={(e) => setReverse(e.target.checked)}
            />{" "}
            Show in reverse order
        </label>
        <ul>
            {displayedContacts.map(contact => (
                <Contact 
                    key={contact.id} 
                    contact={contact} 
                />
            )) }
        </ul>
    </div>
  )
}

export default Challenge5
