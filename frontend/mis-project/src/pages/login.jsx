import React from 'react';
import './login.css'; 
import bgImage from '../assets/login-bg.jpg'

function Login() {
  // 2. Set up the dynamic image layer with the dark overlay
  const customBgStyle = {
    backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.55), rgba(15, 23, 42, 0.55)), url(${bgImage})`};
    
  return (
    <div className="login-page-wrapper" style={customBgStyle}>
      <div className="login-card-box">
        
        <div className="login-header-group">
          <h2 className="login-main-title">Employee Management System</h2>
          <p className="login-sub-title">Please enter your credentials to log in.</p>
        </div>

        <form className="login-form-element">
          <div className="form-input-field">
            <label className="form-field-label">Email</label>
            <input type="email" placeholder="name@company.com" className="form-text-input" required />
          </div>

          <div className="form-input-field">
            <label className="form-field-label">Password</label>
            <input type="password" placeholder="••••••••" className="form-text-input" required />
          </div>

          <button type="submit" className="login-submit-button">Login</button>
        </form>

      </div>
    </div>
  );
}


export default Login;
