import React, { useState } from 'react'

const AddItem = ({ onAddItem }) => {
    const [title, setTitle] = useState('');
    const [error, setError] = useState(''); // State for error message

    const handleAddClick = () => {
        if (title.trim() === '') {
            // If the input is empty, set an error message
            setError('Please enter an item name.');
            return; // Exit the function early
        }

        // Clear any previous error
        setError('');

        // Call the onAddItem function with the title
        onAddItem(title);

        // Clear the input field
        setTitle('');
    };

  return (
    <div>
        <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
        />
        <button onClick={handleAddClick}>
            Add
        </button>
        {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  )
}

export default AddItem
