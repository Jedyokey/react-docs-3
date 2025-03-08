import React from 'react'
import Heading from './Heading'
import Section from './Section'

const ManagePage = () => {
  return (
    <Section>
        <Heading>Title</Heading>
        <Section>
            <Heading>Heading1</Heading>
            <Heading>Heading2</Heading>
            <Heading>Heading3</Heading>

            <Section>
                <Heading>Sub-heading1</Heading>
                <Heading>Sub-heading2</Heading>
                <Heading>Sub-heading3</Heading>

                <Section>
                    <Heading>Sub-sub-heading1</Heading>
                    <Heading>Sub-sub-heading2</Heading>
                    <Heading>Sub-sub-heading3</Heading> 
                </Section>
            </Section>
        </Section>
    </Section>
  )
}

export default ManagePage
