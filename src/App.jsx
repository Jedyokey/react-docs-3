import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Overview/Navbar';
import ManageState from './pages/ManageState';
import InputState from './pages/InputState';
import StateStructure from './pages/StateStructure';
import SharingState from './pages/SharingState';
import PreservingState from './pages/PreservingState';
import ExtractingState from './pages/ExtractingState';
import DataWithContext from './pages/DataWithContext';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<ManageState />} />
          <Route path='/reacting-to-input-with-state' element={<InputState />} />
          <Route path='/choosing-the-state-structure' element={<StateStructure />} />
          <Route path='/sharing-state-between-components' element={<SharingState />} />
          <Route path='/preserving-and-resetting-state' element={<PreservingState />} />
          <Route path='/extracting-state-logic-into-a-reducer' element={<ExtractingState />} />
          <Route path='/passing-data-deeply-with-context' element={<DataWithContext />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
