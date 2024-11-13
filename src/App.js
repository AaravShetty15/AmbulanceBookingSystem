// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import RequestPage from './Pages/RequestPage';
import Feedback from './Pages/Feedback'; // Import Feedback
import AddUser from './Components/AddUser'; // Import AddUser component
import './Styles/General.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Request" element={<RequestPage />} />
        <Route path="/Feedback" element={<Feedback />} /> {/* Feedback Route */}
        <Route path="/add-user" element={<AddUser />} /> {/* New Add User Route */}
      </Routes>
    </div>
  );
}

export default App;
