import React, { useState } from 'react'

const FeedbackForm = () => {
    const [text, setText] = useState("");
    const [status, setStatus] = useState("typing");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        await sendMessage(text);
        setStatus("sent");
    }

    const isSending = status === "sending";
    const isSent = status === "sent";

    if (isSent) {
        return <h1>Thanks for the feedback!</h1>
    }

    // Pretend to send a message.
    const sendMessage = (text) => {
        return new Promise((resolve) => {
            setTimeout(resolve, 2000);
        }) 
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <p>How was your stay at The Prancing Pony?</p>
            <textarea
                disabled={isSending} 
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <br />

            <button type='submit' disabled={isSending}>Send</button>
            {isSending && <p>Sending...</p>}
        </form>
      
    </div>
  )
}

export default FeedbackForm
