import React, { useState } from 'react'

const ScoreBoard = () => {
    const [isPlayerA, setIsPlayerA] = useState(true);

  return (
    <div>
        {isPlayerA ? (
            <Counter key="Taylor" person="Taylor" />
        ) : (
            <Counter key="Alex" person="Alex" />
        )}

        {/* {isPlayerA && <Counter person="Taylor" />}
        {!isPlayerA && <Counter person="Alex" />} */}
        <button onClick={() => setIsPlayerA(!isPlayerA)}>Next Player!</button>
    </div>
  ) 
}

export default ScoreBoard


const Counter = ({ person }) => {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = "scoreboard";
    if (hover) {
        className += " hover";
    }

    // if (isFancy) {
    if (score > 10) {
        className += " fancy";
    }

    return (
        <div 
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h2>{person}'s score: {score}</h2>
            <button onClick={() => setScore(score + 1)}>Add one</button>
        </div>
    )
}