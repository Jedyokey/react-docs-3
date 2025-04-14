// Challenge 1 of 1: Replace prop drilling with context 
// In this example, toggling the checkbox changes the imageSize prop passed to each <PlaceImage>. The checkbox state is held in the top-level App component, but each <PlaceImage> needs to be aware of it.

// Currently, App passes imageSize to List, which passes it to each Place, which passes it to the PlaceImage. Remove the imageSize prop, and instead pass it from the App component directly to PlaceImage.

import React, { useState, useContext } from 'react'
import { places } from "./data.js"
import { getImageUrl } from './utils'
import { ImageSizeContext } from './ChallengeContext.jsx'

const Challenge1 = () => {
    const [isLarge, setIsLarge] = useState(false);
    const imageSize = isLarge ? 150 : 100;

  return (
        <ImageSizeContext.Provider value={imageSize}>
            <label>
            <input 
                type="checkbox" 
                checked={isLarge}
                onChange={(e) => setIsLarge(e.target.checked)}
            />
            Use large images
            </label>
            <hr />
            <List imageSize={imageSize} />
        </ImageSizeContext.Provider>
  )
}

export default Challenge1


const List = () => {
    const listItems = places.map((place) => (
        <li key={place.id}>
            <Place 
                place={place}
            />
        </li>
    ));
    return (
        <ul className='challenge'>{listItems}</ul>
    )
}

const Place = ({ place }) => {
    return(
        <>
            <PlaceImage 
                place={place}
            />
            <p>
                <b>{place.name}</b>
                {": " + place.description}
            </p>
        </>
    )
}

const PlaceImage = ({ place }) => {
    const imageSize = useContext(ImageSizeContext);
    return(
        <img 
            src={getImageUrl(place)} 
            alt={place.name} 
            width={imageSize}
            height={imageSize}
        />
    )
}