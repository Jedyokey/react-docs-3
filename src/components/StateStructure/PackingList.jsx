import React from 'react'

const PackingList = ({ items, onChangeItem, onDeleteItem }) => {
  return (
    <div>
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <input 
                        type="checkbox"
                        checked={item.packed}
                        onChange={(e) => onChangeItem({ ...item, packed: e.target.checked })}
                    />
                    {item.title}
                    <button onClick={() => onDeleteItem(item.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default PackingList
