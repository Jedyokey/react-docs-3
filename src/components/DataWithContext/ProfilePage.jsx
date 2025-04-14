import React from 'react'
import Section2 from './Section2'
import Heading from "./Heading"

const ProfilePage = () => {
  return (
    <Section2>
        <Heading>My Profile</Heading>
        <Posts 
            title="Hello traveller!" 
            body="Read about my adventures." 
        /> 
        <AllPosts />
    </Section2>
  )
}

export default ProfilePage


const AllPosts = () => {
    return (
        <Section2>
            <Heading>Posts</Heading>
            <RecentPosts />
        </Section2>
    )
}


const RecentPosts = () => {
    return (
        <Section2>
            <Heading>Recent Posts</Heading>
            <Posts
                title="Flavors of Lisbon" 
                body="...those pastéis de nata!"
            />
            <Posts 
                title="Buenos Aires in the rhythm of tango" 
                body="I loved it...those francesinhas!"
            />
            <Heading>More Posts</Heading>
        </Section2>
    )
}


const Posts = ({ title, body }) => {
    return (
        <Section2 isFancy={true}>
            <Heading>{title}</Heading>
            <p>
                <i>{body}</i>
            </p>
        </Section2>
    )
}