import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Overview/Navbar';
import ManageState from './pages/ManageState';
import InputState from './pages/InputState';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<ManageState />} />
          <Route path='/reacting-to-input-with-state' element={<InputState />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
