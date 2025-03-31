import React, { useState } from 'react'

const MyApp = () => {
    // const counter = <Counter />;
    const [showSecondCounter, setShowSecondCounter] = useState(true);
    const [isFancy, setIsFancy] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

  return (
    <div>
        {/* {counter} */}
        <h3>State is tied to a position in the render tree</h3>
        <Counter />
        {showSecondCounter && <Counter />}
        <label htmlFor="" className='label-counter'>
            <input 
                type='checkbox'
                checked={showSecondCounter} 
                onChange={(e) => setShowSecondCounter(e.target.checked)}
            />
            Render the second counter
        </label>

        <h3>Same component at the same position preserves state</h3>
        {isFancy ? (
            <Counter isFancy={true} />
        ) : (
            <Counter isFancy={false} />
        )}
        <label htmlFor="" className='label-counter'>
            <input 
                type='checkbox'
                checked={isFancy} 
                onChange={(e) => setIsFancy(e.target.checked)}
            />
            Use fancy styling
        </label>

        <h2>Different components at the same position reset state</h2>
        {isPaused ? (
            // <Counter isFancy={true} isPaused={true} />
            <b>See you later!</b>
        ) : (
            // <b>See you later!</b>
            <Counter isFancy={true}  />
        )}
        <label htmlFor="" className='label-counter'>
            <input 
                type='checkbox'
                checked={isPaused} 
                onChange={(e) => setIsPaused(e.target.checked)}
            />
            Take a break
        </label><br /><br />
    </div>
  )
}

export default MyApp


const Counter = ({ isFancy }) => {
    const [score, setScore ] = useState(0);
    const [hover, setHover] = useState(false);

    let className = "counter";
    if (hover) {
        className += " hover";
    }
    if (isFancy) {
        className += " fancy";
    }

    const reduceBtn = () => {
        if (score > 0) {
            setScore(score - 1);
        }
    }

    return (
        <div 
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h2>{score}</h2>
            <button onClick={() => setScore(score + 1)}>+</button>
            
            <button onClick={() => setScore(0)}>Reset</button>
            <button onClick={reduceBtn}>-</button>
        </div>
    )
}

