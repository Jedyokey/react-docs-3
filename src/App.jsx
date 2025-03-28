import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Overview/Navbar';
import ManageState from './pages/ManageState';
import InputState from './pages/InputState';
import StateStructure from './pages/StateStructure';
import SharingState from './pages/SharingState';

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
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
