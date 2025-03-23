import React from 'react'
// import MovingDot from '../components/StateStructure/MovingDot'
import FeedbackForm from '../components/StateStructure/FeedbackForm'
import MyForm from '../components/StateStructure/MyForm'
import Menu from '../components/StateStructure/Menu'
import EditedMenu from '../components/StateStructure/EditedMenu'
// import TravelPlan from '../components/StateStructure/TravelPlan'
// import TravelPlan2 from '../components/StateStructure/TravelPlan2'
import TravelPlanImmer from '../components/StateStructure/TravelPlanImmer'
import Challenge1 from '../components/StateStructure/Challenge1'
import Challenge2 from '../components/StateStructure/Challenge2'
import Challenge3 from '../components/StateStructure/Challenge3'

const StateStructure = () => {
  return (
    <div>
        {/* <MovingDot />  */}
        <FeedbackForm />
        <MyForm />
        <Menu />
        <EditedMenu />
        {/* <TravelPlan />
        <TravelPlan2 /> */}
        <TravelPlanImmer />
        <Challenge1 />
        <Challenge2 />
        <Challenge3 />
    </div>
  )
}

export default StateStructure
