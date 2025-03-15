import React, { useState } from 'react'

// Make it so that clicking on the picture removes the background--active CSS class from the outer <div>, but adds the picture--active class to the <img>. Clicking the background again should restore the original CSS classes. background background--active picture

const Picture = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    }

  return (
    <div 
        className={`background ${isActive ? '' : 'background--active'}`}
        onClick={handleClick}  
    >
        {/* <h3>Challenge 1 of 3: Add and remove a CSS class </h3> */}
        <img 
            src="https://i.imgur.com/5qwVYb1.jpeg" 
            className={`picture ${isActive ? 'picture--active' : ''}`} 
            onClick={(e) => {
                e.stopPropagation();
                handleClick();
            }}
            alt="Rainbow houses in Kampung Pelangi, Indonesia" 
        />
    </div>
  )
}

export default Picture
