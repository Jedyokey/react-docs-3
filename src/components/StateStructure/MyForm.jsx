import React, { useState } from 'react'

const MyForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const fullName = firstName + " " + lastName;

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

  return (
    <div>
        <h2 className='heading'>Avoid redundant state</h2>
        <form action="" className='edit-profile'>
            <label htmlFor="">
                First Name: {" "}
                <input 
                    type="text"
                    value={firstName}
                    onChange={handleFirstName} 
                />
            </label>
            <label htmlFor="">
                Last Name: {" "}
                <input 
                    type="text"
                    value={lastName}
                    onChange={handleLastName}
                />
            </label>

            <p>Your ticket will be issued to <b>{fullName}</b></p>
        </form>
      
    </div>
  )
}

export default MyForm
