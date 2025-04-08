import React, { useState } from 'react'

const Chat = ({ contact, message, dispatch }) => {
  const [error, setError] = useState(null);
  
  if (!contact) {
    return <p>Select a contact to start chatting.</p>;
  }
  const handleSend = () => {
    if (message.trim() === "") {
      setError("Please enter a message");
      return;
    }

    alert(`Message sent to ${contact.email}: ${message}`);
    dispatch({ type: "edited_message", message: "" });
    setError(null); // Clear error after sending
  }

  return (
    <section className='chat'>
      <textarea
        value={message}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => {
          dispatch({ type: "edited_message", message: e.target.value });
          setError(null); // Clear error when user types
        }}
      />
      <br />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleSend}>
        Send to {contact.email}
      </button>
      <br />
      <button onClick={() => {
        dispatch({ type: "edited_message", message: "" });
        setError(null); // Clear error when user clears the message
      }}>
        Clear Message
      </button>
    </section>
  )
}

export default Chat
