/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './main.css';

const Main = () => {
    return (
      <div className="lib-main">
        <div className='lib-left'>
          <div className='button-all'>
          <div className="button"><p>Upload Files</p></div>
          <div className="button"><p>Home</p></div>
          <div className="button2"><p>Subjects</p>
          <div className='sub-element'>
            <div className='sub-el'><p>Internet of Things</p></div>
            <div className='sub-el'><p>Soft Computing Techniques</p></div>
            <div className='sub-el'><p>Machine Learning</p></div>
            <div className='sub-el'><p>Cloud Computing</p></div>
            <div className='sub-el'><p>Simulation and Modeling</p></div>
          </div>
          </div>
          <div className="button2"><p>Library</p>
          <div className='sub-element'>
            <div className='sub-el'><p>Favourites</p></div>
            <div className='sub-el'><p>Recents</p></div>
            <div className='sub-el'><p>Uploads</p></div>
            <div className='sub-el'><p>Read Laters</p></div>
          </div>
          </div>
        </div>
        <div className='main-user'><img src="/user-icon.png" alt="User Icon" className="user-icon" /><p>Username</p></div>
        </div>
        <div className='lib-right'>
        <div className='lib-right-menu'>
        <div className="menu"><p>Notes</p></div>
        <div className="menu"><p>Assignments</p></div>
        <div className="menu"><p>Q&As</p></div>
        <div className="menu1"><p>Test Papers</p></div>
        <div className="menu2"><p>Syllabus</p></div>
        </div>
        <div className='lib-right-main'>
          <div className='lib-assign'>
            <div className='lib-ass-head'>
              <p>Name</p>
              <p2>Download</p2>
            </div>
            <div className='lib-ass-cont'>
              <div className='lib-ass-ele'><p>MA402 Mid Sem 2024</p>
              <p2><img src="/download.png" alt="User Icon" className="download-logo" /></p2></div>
              <div className='lib-ass-ele'><p>MA402 End Sem 2024</p>
              <p2><img src="/download.png" alt="User Icon" className="download-logo" /></p2></div>
              <div className='lib-ass-ele'><p>MA402 Mid Sem 2023</p>
              <p2><img src="/download.png" alt="User Icon" className="download-logo" /></p2></div>
              <div className='lib-ass-ele'><p>MA402 End Sem 2023</p>
              <p2><img src="/download.png" alt="User Icon" className="download-logo" /></p2></div>
              <div className='lib-ass-ele'><p>MA402 Mid Sem 2022</p>
              <p2><img src="/download.png" alt="User Icon" className="download-logo" /></p2></div>
              <div className='lib-ass-ele'><p>MA402 End Sem 2022</p>
              <p2><img src="/download.png" alt="User Icon" className="download-logo" /></p2></div>
              <div className='lib-ass-ele'><p>MA402 Back Paper 2023</p>
              <p2><img src="/download.png" alt="User Icon" className="download-logo" /></p2></div>
              <div className='lib-ass-ele'><p>MA402 Back Paper 2024</p>
              <p2><img src="/download.png" alt="User Icon" className="download-logo" /></p2></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  };
  
  export default Main;
  