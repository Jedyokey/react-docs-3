// Challenge 1 of 5: Fix disappearing input text 

// This example shows a message when you press the button. However, pressing the button also accidentally resets the input. Why does this happen? Fix it so that pressing the button does not reset the input text.

import React, { useState } from 'react'

const Challenge1 = () => {  
    const [showHint, setShowHint] = useState(false);
    
  return (
    <div className='label-counter'>
        {/* <Form /><br />
        <button onClick={() => setShowHint(true)}>
            Show Hint
        </button> */}
        
        <h2>Challenge 1 of 5: Fix disappearing input text</h2>

        {showHint && <p><i>Hint: Your favorite city?</i></p>}
        <Form /><br />
        {showHint ? (
            <button onClick={() => setShowHint(false)}>Hide Hint</button>
        ) : (
            <button onClick={() => setShowHint(true)}>Show Hint</button>
        )}
    </div>
  )
}

export default Challenge1


const Form = () => {
    const [text, setText] = useState('');
    return <textarea value={text} onChange={(e) => setText(e.target.value)} />
}