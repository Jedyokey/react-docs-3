import React from 'react'

const Clock = ({ time, color }) => {
  // const [color, setColor] = useState('lightcoral'); 

  return (
    <div>
      <h1 style={{color: color}}>{time}</h1>
    </div>
  )
}

export default Clock
