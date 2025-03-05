import React, { useState } from 'react'

const Form2 = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const fullName = firstName + ' ' + lastName;

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }
  return (
    <div>
        <h2>Let’s check you in</h2>

        <label htmlFor="">
            First name: {" "}
            <input 
                type="text"
                value={firstName}
                onChange={handleFirstNameChange} 
            /> 
        </label><br /><br />

        <label htmlFor="">
            Last name: {" "}
            <input 
                type="text"
                value={lastName}
                onChange={handleLastNameChange} 
            /> 
        </label><br /><br />
        <p>Your tickets will be issued to <b>{fullName}</b> </p>
    </div>
  )
}

export default Form2
