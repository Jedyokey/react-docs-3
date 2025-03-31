import React, { useEffect, useState } from 'react'

const EditContact = ({ initialData, onSave }) => {
    const [name, setName] = useState(initialData.name);
    const [email, setEmail] = useState(initialData.email);

    // useEffect(() => {
    //     setName(initialData.name);
    //     setEmail(initialData.email);
    // }, [initialData]); 

  return (
    <section className='edit-contact'>
        <h3>Edit Contact</h3>
        <label>
            Name: {" "}
            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} 
            />
        </label>
        <label>
            Email: {" "}
            <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
            />
        </label>
        <button onClick={() => {
            const updatedData = {
                id: initialData.id,
                name: name,
                email: email
            }
            onSave(updatedData);
            setName(name);
            setEmail(email);
        }}>
            Save
        </button>

        <button onClick={() => {
            setName(initialData.name);
            setEmail(initialData.email);
        }}>
            Reset
        </button>
    </section>
  )
}

export default EditContact
