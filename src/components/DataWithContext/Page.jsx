import React from 'react'
import Section from './Section'
import Heading from './Heading'

const Page = () => {
  return (
    <Section>
        <Heading>Title</Heading>
        <Section>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Section>
                <Heading>Sub-Heading</Heading>
                <Heading>Sub-Heading</Heading>
                <Heading>Sub-Heading</Heading>
                <Section>
                    <Heading>Sub-Sub-Heading</Heading>
                    <Heading>Sub-Sub-Heading</Heading>
                    <Heading>Sub-Sub-Heading</Heading>
                </Section>
            </Section>
        </Section>
    </Section>
  )
}

export default Page
