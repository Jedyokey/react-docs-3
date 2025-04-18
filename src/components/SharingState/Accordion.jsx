import React, { useState } from 'react'

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
        <h2>Almaty, Kazakhstan</h2>
        <Panel 
            title="About Almaty" 
            isActive={activeIndex === 0}
            onShow={() => setActiveIndex(0)}
            onHide={() => setActiveIndex(null)}
        >
            With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city. It is located in the southeastern part of the country, near the border with Kyrgyzstan. The city is known for its beautiful mountains, which are popular among hikers and skiers.
        </Panel>
        <Panel 
            title="Etymology" 
            isActive={activeIndex === 1}
            onShow={() => setActiveIndex(1)}
            onHide={()=> setActiveIndex(null)}
        >
            The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
        </Panel>
    </div>
  )
}

export default Accordion


const Panel = ({ title, children, isActive, onShow, onHide }) => {
    // const [isActive, setIsActive] = useState(false);

    return (
        <section className='panel'>
            <h3>{title}</h3>
            {isActive ? (
                <>
                    <p>{children}</p>
                    {/* <button onClick={() => setIsActive(false)}>Hide</button> */}
                    <button onClick={onHide}>Hide</button>
                </>
            ) : (
                // <button onClick={() => setIsActive(true)}>Show</button>
                <button onClick={onShow}>Show</button>
            )}
        </section>
    )
}