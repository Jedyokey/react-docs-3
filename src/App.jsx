import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Overview/Navbar';
import ManageState from './pages/ManageState';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<ManageState />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
