import React, { useContext } from 'react'
import { LevelContext } from './LevelContext'

const Section2 = ({ children, isFancy }) => {
    const level = useContext(LevelContext);

  return (
    <section className={`section ${isFancy ? 'fancy' : ''}`}>
        <LevelContext.Provider value={level + 1}>
            {children}
        </LevelContext.Provider>
    </section>
  )
}

export default Section2
