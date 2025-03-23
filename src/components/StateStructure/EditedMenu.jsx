import React, { useState } from 'react'

const initialItems = [
    { title: 'pretzels', id: 0 },
    { title: 'crispy seaweed', id: 1 },
    { title: 'granola bar', id: 2 },
]

const EditedMenu = () => {
    const [items, setItems] = useState(initialItems);
    // const [selectedItem, setSelectedItem] = useState(items[0]);
    const [selectedId, setSelectedId] = useState(0);

    const selectedItem = items.find(item => item.id === selectedId);

    const handleItemChange = (id, e) => {
        setItems(items.map(item => {
            if (item.id === id) {
                return {...item, title: e.target.value};
            } else {
                return item;
            }
        }))
    }

  return (
    <div>
        <h3 className="heading">What's your travel snack? (Editing the Menu)</h3> 
        <ul className='menu'>
            {items.map((item, index) => (
                <li key={item.id}>
                    <input 
                        type="text"
                        value={item.title}
                        onChange={(e) => handleItemChange(item.id, e)} 
                    /> {" "}
                    <button onClick={() => setSelectedId(item.id)}>Choose</button>
                </li>
            ))}
        </ul>
        <p>You picked {selectedItem.title}.</p> 

        <ol>
            <li>garri</li>
            <li>rice</li>
            <li>mango</li>
        </ol>
    </div>
  )
}

export default EditedMenu
