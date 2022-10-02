import React from 'react'
import LandingPage from './pages/landingpage/LandingPage';
import LoginPage from './pages/loginpage/LoginPage';
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
    <Router>
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
    </Router>

    </div>
  )
}

export default App