// In this example, each Letter has an isSelected prop and an onToggle handler that marks it as selected. This works, but the state is stored as a selectedId (either null or an ID), so only one letter can get selected at any given time.

// Change the state structure to support multiple selection. (How would you structure it? Think about this before writing the code.) Each checkbox should become independent from the others. Clicking a selected letter should uncheck it. Finally, the footer should show the correct number of the selected items.

import React, { useState } from 'react'
import { letters } from '../../JS/data'
import Letter from './Letter'

const Challenge3 = () => {
    // State to store multiple selected IDs
    const [selectedIds, setSelectedIds] = useState([]);

    // Function to handle toggling selection
    const handleToggle = (toggleId) => {
       // Was it previously selected?
       if (selectedIds.includes(toggleId)) {
            // Then remove this ID from the array.
            setSelectedIds(selectedIds.filter((id) => id !== toggleId));
       } else {
            // Otherwise, add this ID to the array.
            setSelectedIds([...selectedIds, toggleId]);
       }
    }

    // Calculate the number of selected letters
    const selectedCount = selectedIds.length;

  return (
    <div>
        <h2>Challenge 3 of 3: Implement multiple selection</h2>
        <h3>Inbox</h3>
        <ul>
            {letters.map((letter) => (
                <Letter 
                    key={letter.id}
                    letter={letter}
                    isSelected={selectedIds.includes(letter.id)} // Check if the letter is selected
                    onToggle={handleToggle}
                />
            ))}

            <p>
                <b>You selected {selectedCount} letters</b>
            </p>
        </ul>
      
    </div>
  )
}

export default Challenge3
