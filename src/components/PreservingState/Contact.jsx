import React, { useState } from 'react'

const Contact = ({ contact }) => {
    const [expanded, setExpanded] = useState(false);

  return (
    <div>
        <p><b>{contact.name}</b></p>
        {expanded && <p><i>{contact.email}</i></p>}
        <button onClick={() => setExpanded(!expanded)}>
            {expanded ? "Hide" : "Show"} Email
        </button>
    </div>
  )
}

export default Contact
