// TitleSection.js
import React from 'react';
import './TitleSection.css'; // Import the CSS

function TitleSection() {
  return (
    <div className="title-section">
      <div className="content-wrapper">
        {/* Left-side Text Section */}
        <div className="text-section">
          <div className="title-text">
            Your Collaborative Hub for Sharing and Learning
          </div>
          <button className="get-started-btn">Get Started</button>
        </div>

        {/* Glass Effect Image Container */}
        <div className="image-container">
          <img
            src="/Title Screen Image.png"
            alt="Title Screen"
          />
        </div>
      </div>
    </div>
  );
}

export default TitleSection;
