// These two inputs are independent. Make them stay in sync: editing one input should update the other input with the same text, and vice versa.

import React, { useState } from 'react'

const SyncedInputs = () => {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    }
  return (
    <div>
        <h2>Challenge 1 of 2: Synced inputs</h2>
        <Input label="First Input" value={text} onChange={handleChange} />
        <Input label="Second Input" value={text} onChange={handleChange} />
    </div>
  )
}

export default SyncedInputs


const Input = ({ label, value, onChange }) => {
    // const [text, setText] = useState("");

    // const handleChange = (e) => {
    //     setText(e.target.value);
    // }

    return (
        <div>
            <label>
                {label} {" "}
                <input type="text" value={value} onChange={onChange} />
            </label>
            <br /><br />
        </div>
    )
}