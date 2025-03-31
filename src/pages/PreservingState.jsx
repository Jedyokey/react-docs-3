import React from 'react'
import MyApp from '../components/PreservingState/Counter'
import ScoreBoard from '../components/PreservingState/ScoreBoard'
import Messenger from '../components/PreservingState/Messenger'
import Challenge1 from '../components/PreservingState/Challenge1'
import Challenge2 from '../components/PreservingState/Challenge2'
import ContactManager from '../components/PreservingState/Challenge3'
import Gallery from '../components/PreservingState/Challenge4'
import Challenge5 from '../components/PreservingState/Challenge5'

const PreservingState = () => {
  return (
    <div>
        <h1>Preserving and Resetting State</h1>
        <p>In this section, we will learn how to preserve and reset state in React.</p>
        <p>We will use the useState hook to manage the state of our components.</p>
        <p>We will also learn how to reset the state of our components using the useState hook.</p>
        <MyApp />
        <ScoreBoard />
        <Messenger />
        <Challenge1 />
        <Challenge2 />
        <ContactManager />
        <Gallery />
        <Challenge5 /> 
    </div>
  )
}

export default PreservingState
