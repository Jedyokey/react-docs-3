// In this example, the SearchBar has its own query state that controls the text input. Its parent FilterableList component displays a List of items, but it doesn’t take the search query into account.

// Use the filterItems(foods, query) function to filter the list according to the search query. To test your changes, verify that typing “s” into the input filters down the list to “Sushi”, “Shish kebab”, and “Dim sum”.

// Note that filterItems is already implemented and imported so you don’t need to write it yourself!

import React, { useState } from 'react'
import { foods, filterItems } from './data'

const FilterableList = () => {
    const [query, setQuery] = useState('');

    // Filter the foods based on the query
    const filteredItems = filterItems(foods, query);

    const handleChange = (e) => {
        setQuery(e.target.value);
    }
  return (
    <div>
        <h2>Challenge 2 of 2: Filtering a list</h2>
        <SearchBar query={query} onChange={handleChange} />
        <hr />
        <List items={filteredItems} />
    </div>
  )
}

export default FilterableList


const SearchBar = ({ query, onChange }) => {
    // const [query, setQuery] = useState('');

    // const handleChange = (e) => {
    //     setQuery(e.target.value);
    // }
  return (
    <label htmlFor="">
        Search: {" "}
        <input 
            type="text"
            value={query}
            onChange={onChange} 
        />
    </label>
  )
}

const List = ({ items }) => {
    return (
        <table>
            <tbody>
                {items.map(food => (
                    <tr key={food.id}>
                        <td>{food.name}</td>
                        <td>{food.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
