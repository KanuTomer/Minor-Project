import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignupPage.css';
// import Footer from './footer';

const SignupPage = () => {
  const [credentials, setCredentials] = useState({});

  const onUpdate = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  const navigate = useNavigate();

  const handleContinue = async(e) => {
    e.preventDefault();

    // TODO: validate data
    const res = await axios.post("http://localhost:5000/register", credentials);
    navigate("/login")

  };

  return (
    <div className="signup-page">
      <div className="image-container">
        <div className="signup-container">
          <h1 className="logo">openote.</h1>
          <h2>Start your openote journey now</h2>
          <form className="signup-form" onSubmit={handleContinue}>
            <label>
              <h3>Username</h3>
              <input
                type="text"
                placeholder="Choose your username"
                value={credentials.name}
                name="name"
                onChange={(e) => onUpdate(e)}
              />
            </label>
            <label>
              <h3>Email</h3>
              <input
                type="email"
                placeholder="Enter your email address..."
                value={credentials.email}
                name="email"
                onChange={(e) => onUpdate(e)}
              />
            </label>
            <label>
              <h3>Password</h3>
              <input
                type="password"
                placeholder="Choose Password..."
                value={credentials.password}
                name="password"
                onChange={(e) => onUpdate(e)}
              />
            </label>
            <label>
              <h3>Re-enter Password</h3>
              <input
                type="password"
                placeholder="Re-enter Password..."
                value={credentials.verifyPassword}
                name="verifyPassword"
                onChange={(e) => onUpdate(e)}
              />
            </label>
            <button type="submit" className="continue-button">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;