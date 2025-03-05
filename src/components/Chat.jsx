import React, { useState } from 'react'

const Chat = ({ contact }) => {
  const [text, setText] = useState('');

  return (
    <div className='chat'>
      <textarea
        value={text}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => setText(e.target.value)} 
      /><br />

      <button>Send to {contact.email}</button>
      
    </div>
  )
}

export default Chat
