// Challenge 4 of 5: Clear an image while it’s loading 

// When you press “Next”, the browser starts loading the next image. However, because it’s displayed in the same <img> tag, by default you would still see the previous image until the next one loads. This may be undesirable if it’s important for the text to always match the image. Change it so that the moment you press “Next”, the previous image immediately clears.

import React, { useState } from 'react'

const Gallery = () => {
    const [index, setIndex] = useState(0);

    const hasNext = index < images.length - 1;

    const handleClick = () => {
        if (hasNext) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }
    let image = images[index];
  return (
    <div>
        <h2>Challenge 4 of 5: Clear an image while it’s loading</h2>
        <button onClick={handleClick}>Next</button>
        <h3>Image {index + 1} of {images.length}</h3>
        <img src={image.src} key={image.src} className='gallery-img' alt="" />
        <p> 
            {image.place}
        </p>
    </div>
  )
}

export default Gallery


let images = [{
    place: 'Penang, Malaysia',
    src: 'https://i.imgur.com/FJeJR8M.jpg'
  }, {
    place: 'Lisbon, Portugal',
    src: 'https://i.imgur.com/dB2LRbj.jpg'
  }, {
    place: 'Bilbao, Spain',
    src: 'https://i.imgur.com/z08o2TS.jpg'
  }, {
    place: 'Valparaíso, Chile',
    src: 'https://i.imgur.com/Y3utgTi.jpg'
  }, {
    place: 'Schwyz, Switzerland',
    src: 'https://i.imgur.com/JBbMpWY.jpg'
  }, {
    place: 'Prague, Czechia',
    src: 'https://i.imgur.com/QwUKKmF.jpg'
  }, {
    place: 'Ljubljana, Slovenia',
    src: 'https://i.imgur.com/3aIiwfm.jpg'
  }];