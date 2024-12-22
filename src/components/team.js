import React from 'react';
import './team.css'; // Import the CSS

const Team = () => {
    return (
        <><div className="yeam-section">
            <h2 className="team-title">Our Team Members</h2>
        </div><div className="team-member">

                <div className="team-content">
                <img src="/Profile Image.png" alt="Library Control" className="team-photo" />
                    <h2>Abhishek Kumar</h2>
                    <p>Front-End Developer</p>
                    <div className='team-social'>
                        <img src="/youtube_logo.png" alt="Library Control" className="icon-photo" />
                        <img src="/twitter_logo.png" alt="Library Control" className="icon-photo" />
                        <img src="/facebook_logo.png" alt="Library Control" className="icon-photo" />
                        <img src="/linkedin_logo.png" alt="Library Control" className="icon-photo" />
                    </div>
                </div>
                <div className="team-content">
                <img src="/Profile Image.png" alt="Library Control" className="team-photo" />
                    <h2>Kushagra Singh</h2>
                    <p>Front-End Developer</p>
                    <div className='team-social'>
                    <img src="/youtube_logo.png" alt="Library Control" className="icon-photo" />
                        <img src="/twitter_logo.png" alt="Library Control" className="icon-photo" />
                        <img src="/facebook_logo.png" alt="Library Control" className="icon-photo" />
                        <img src="/linkedin_logo.png" alt="Library Control" className="icon-photo" />
                    </div>
                </div>
                <div className="team-content">
                <img src="/Profile Image.png" alt="Library Control" className="team-photo" />
                    <h2>Bhav Sharma</h2>
                        <p>Back-End and Server Side Developer</p>
                    <div className='team-social'>
                    <img src="/youtube_logo.png" alt="Library Control" className="icon-photo" />
                        <img src="/twitter_logo.png" alt="Library Control" className="icon-photo" />
                        <img src="/facebook_logo.png" alt="Library Control" className="icon-photo" />
                        <img src="/linkedin_logo.png" alt="Library Control" className="icon-photo" />
                    </div>
                </div>
                <div className="team-content">
                <img src="/Profile Image.png" alt="Library Control" className="team-photo" />
                    <h2>Kanu Tomer</h2>
                            <p>UI/UX Design and Front-End Developer</p>
                    <div className='team-social'>
                    <img src="/youtube_logo.png" alt="Library Control" className="icon-photo" />
                        <img src="/twitter_logo.png" alt="Library Control" className="icon-photo" />
                        <img src="/facebook_logo.png" alt="Library Control" className="icon-photo" />
                        <img src="/linkedin_logo.png" alt="Library Control" className="icon-photo" />
                    </div>
                </div>
            </div></>



    )
}

export default Team;