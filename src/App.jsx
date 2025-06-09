import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HeaderUser from '../components/header_user';
import Footer from '../components/Footer';
import TreatmentPlanUser from '../pages/TreatmentPlan_User';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<div>Welcome Page</div>} />
          <Route path="/user" element={<><HeaderUser/><TreatmentPlanUser/><Footer/></>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;