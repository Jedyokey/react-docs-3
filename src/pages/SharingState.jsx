import React from 'react'
import Accordion from '../components/SharingState/Accordion'
import SyncedInputs from '../components/SharingState/Challenge1'
import FilterableList from '../components/SharingState/Challenge2'

const SharingState = () => {
  return (
    <div>
      <Accordion />
      <SyncedInputs />
      <FilterableList />
    </div>
  )
}

export default SharingState
