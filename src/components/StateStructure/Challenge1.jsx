// Challenge 1 of 4: Fix a component that’s not updating 
// This Clock component receives two props: color and time. When you select a different color in the select box, the Clock component receives a different color prop from its parent component. However, for some reason, the displayed color doesn’t update. Why? Fix the problem.

import React, { useState, useEffect } from 'react'
import Clock from './Clock' 

const useTime = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const Challenge1 = () => {
  const time = useTime();
  const [color, setColor] = useState('lightcoral');

  return (
    <div>
      <h2>Challenge 1 of 3: Fix a component that’s not updating </h2>
      <p>
        Pick a color:
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="lightcoral">Light Coral</option>
          <option value="midnightblue">Midnight Blue</option>
          <option value="lightgreen">Light Green</option>
        </select>
      </p>
      <Clock time={time.toLocaleTimeString()} color={color} />
    </div>
  ) 
}

export default Challenge1 
