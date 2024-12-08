// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import TitleSection from './components/TitleSection';
import HowItWorksSection from './components/HowItWorksSection';
import FilesPage from './Pages/FilesPage';  // Ensure the path is correct

// HomePage component as a wrapper for homepage content
function HomePage() {
  return (
    <div>
      <Navbar />
      <TitleSection />
      <HowItWorksSection />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar /> {/* Ensure Navbar is rendered on every page */}
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Home route */}
        <Route path="/library" element={<FilesPage />} /> {/* Library route */}
      </Routes>
    </Router>
  );
}

export default App;
