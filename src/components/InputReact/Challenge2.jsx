import React, { useState } from 'react'

const EditProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState('Jane');
    const [lastName, setLastName] = useState('Jacobs');

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    }

    if (isEditing) {
        return (
            <div className='edit'>
                <form action="" className='edit-profile'>
                    <label htmlFor="">
                        First Name: {" "} 
                        <input 
                            type="text"
                            value={firstName} 
                            onChange={handleFirstNameChange}  
                        />
                    </label>
                    <label htmlFor="">
                        Last Name: {" "} 
                        <input 
                            type="text"
                            value={lastName} 
                            onChange={handleLastNameChange} 
                        />
                    </label>

                    <button 
                        type='submit'
                        onClick={() => setIsEditing(false)}
                    >
                        Save Profile
                    </button>
                    <p><i>Hello, {firstName} {lastName}!</i></p>
                </form>
            </div>
        )
    } 

    return (
        <div className='edit'>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="">
                    First Name: {" "} <b>{firstName}</b>
                </label><br />
                <label htmlFor="">
                    Last Name: {" "} <b>{lastName}</b>
                </label><br />
                <button onClick={() => setIsEditing(true)}>Edit Profile</button>
                <p><i>Hello, {firstName} {lastName}!</i></p>
            </form>
        </div>
    )
}

export default EditProfile
