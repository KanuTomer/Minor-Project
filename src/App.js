import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage';
import SignupPage from './components/SignupPage';
import SignupPage2 from './components/SignupPage2';
import Navbar from './components/navbar';
import Login from './components/login';
// eslint-disable-next-line no-unused-vars

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup2" element={<SignupPage2 />} /> {/* New route */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
