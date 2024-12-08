import React from 'react';
import Navbar from '../components/navbar'; // Navbar is reused
import Sidebar from '../components/Sidebar'; // Sidebar component for the files page
import './FilesPage.css'; // Import CSS for the files page

const FilesPage = () => {
  return (
    <div className="files-page">
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="documents">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="document-card">
              <img src="/DocumentIcon.png" alt="Document Icon" />
              <p>Document Name</p>
              <p>dd/mm/yyyy</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilesPage;
