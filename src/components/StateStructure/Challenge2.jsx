// Challenge 2 of 4: Fix a broken packing list 

// This packing list has a footer that shows how many items are packed, and how many items there are overall. It seems to work at first, but it is buggy. For example, if you mark an item as packed and then delete it, the counter will not be updated correctly. Fix the counter so that it’s always correct.

import React, { useState } from 'react'
import AddItem from './AddItem'
import PackingList from './PackingList'

let nextId = 3;
const initialItems = [
    {id: 0, title: 'Warm socks', packed: true },
    { id: 1, title: 'Travel journal', packed: false },
    { id: 2, title: 'Watercolors', packed: false },
];

const Challenge2 = () => {
    const [items, setItems] = useState(initialItems);
    // const [total, setTotal] = useState(3);
    // const [packed, setPacked] = useState(1);

    // Calculate total and packed dynamically
    const total = items.length;
    const packed = items.filter(item => item.packed).length;

    const handleAddItem = (title) => {
        // setTotal(total + 1);
        setItems([...items, { id: nextId++, title: title, packed: false }]);
    }

    const handleChangeItem = (nextItem) => {
        setItems(items.map(item => item.id === nextItem.id ? nextItem : item));
        // if (nextItem.packed) {
        //     setPacked(packed + 1);
        // } else {
        //     setPacked(packed - 1);
        // }
    }

    const handleDeleteItem = (itemId) => {
        // setTotal(total - 1);
        setItems(items.filter(item => item.id !== itemId));
    }

  return (
    <div>
        <h2>Challenge 2 of 3: Fix a broken packing list </h2>
        <AddItem onAddItem={handleAddItem} />
        <PackingList 
            items={items} 
            onChangeItem={handleChangeItem} 
            onDeleteItem={handleDeleteItem} 
        />
        <hr />
        <b>{packed} out of {total} packed!</b>
    </div>
  )
}

export default Challenge2
