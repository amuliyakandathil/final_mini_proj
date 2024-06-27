// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import NotFound from './pages/NotFound';
import Login from './components/Login'; 
import Profile from "./components/Profile";
import PatientInfo from "./components/PatientInfo";
import MedicalRecord from './components/MedicalRecord';
import TalkToUs from './components/TalkToUs';
import Family from './components/Family';
import MyDoctors from './components/MyDoctors';
import Medication from './components/Medication';

function App() {
  return (
    <Router basename="/Health-Plus">
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/appointment-form" element={<Appointment />} />
          <Route path="/login" element={<Login />} /> {/* Add login route */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/medical-record" element={<MedicalRecord />} />
          <Route path="/patient-info" element={<PatientInfo />} />
          <Route path="/TalkTo-Us" element={<TalkToUs/>} />
          <Route path="/my-doctors" element={<MyDoctors/>} />
          <Route path="/family" element={<Family/>} />
          <Route path="/medication" element={<Medication />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;





