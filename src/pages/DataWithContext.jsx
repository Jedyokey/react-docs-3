import React from 'react'
import Section from '../components/DataWithContext/Section'
import Heading from '../components/DataWithContext/Heading'
import Page from '../components/DataWithContext/Page'
import ProfilePage from '../components/DataWithContext/ProfilePage'
import Challenge1 from '../components/DataWithContext/Challenge1'

const DataWithContext = () => {
  return (
    <div>
        <h1>Passing Data Deeply with Context</h1>
        <p>In this section, we will learn how to pass data deeply through the component tree using React Context.</p>
        <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>

        <Section>
            <Heading level={1}>Title</Heading>
            <Heading level={2}>Heading</Heading>
            <Heading level={3}>Sub-Heading</Heading>
            <Heading level={4}>Sub-Sub-Heading</Heading>
            <Heading level={5}>Sub-Sub-Sub-Heading</Heading>
            <Heading level={6}>Sub-Sub-Sub-Sub-Heading</Heading>
        </Section>
        <hr />
        <br />

        <Page />
        <hr />
        <br />

        <h1>Context passes through intermediate components</h1>
        <ProfilePage />

        <hr />
        <br />
        <h2>Challenge 1 of 1: Replace prop drilling with context</h2>
        <Challenge1 />
    </div>
  )
}

export default DataWithContext
