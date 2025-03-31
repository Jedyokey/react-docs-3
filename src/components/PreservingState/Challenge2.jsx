// Challenge 2 of 5: Swap two form fields 
// This form lets you enter first and last name. It also has a checkbox controlling which field goes first. When you tick the checkbox, the “Last name” field will appear before the “First name” field.

// It almost works, but there is a bug. If you fill in the “First name” input and tick the checkbox, the text will stay in the first input (which is now “Last name”). Fix it so that the input text also moves when you reverse the order.

import React, { useState } from 'react'

const Challenge2 = () => {
    const [reverse, setReverse] = useState(false);

    let checkbox = (
        <label>
            <input 
                type="checkbox" 
                checked={reverse} 
                onChange={(e) => setReverse(e.target.checked)} 
            />
            Reverse order
        </label>
    )

  return (
    <div>
        <h2>Challenge 2 of 5: Swap two form fields</h2>
        {reverse ? (
            <div>
                <Field key="last name" label="Last name" /><br /><br />
                <Field key="first name" label="First name" /><br /><br />
                {checkbox} 
            </div>
        ) : (
            <div>
                <Field key="first name" label="First name" /><br /><br />
                <Field key="last name" label="Last name" /><br /><br />
                {checkbox}
            </div>
        )}
      
    </div>
  )
}

export default Challenge2


const Field = ({ label }) => {
    const [text, setText] = useState('');

    return (
        <label>
            {label}: {" "}
            <input 
                type="text"
                placeholder={label}
                value={text}
                onChange={(e) => setText(e.target.value)} 
            />
        </label>
    )
}