// File: src/App.js

import React from 'react';
import Navbar from './components/navbar';  // Assuming you have Navbar
import TitleSection from './components/TitleSection';
import HowItWorksSection from './components/HowItWorksSection';
import Team from './components/team';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar />
      <TitleSection />
      <HowItWorksSection />
      <Team />
      <Footer/>
    </div>
  );
}

export default App;
