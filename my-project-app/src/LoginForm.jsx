// LoginForm.js
import React, { useState } from 'react';

const LoginForm = ({ onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('login'); // 'login' or 'signup'

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform your login logic here (replace this with your actual logic)
    const isSuccess = true; // Replace with your login logic result

    if (isSuccess) {
      // Call the onLoginSuccess callback from the parent
      onLoginSuccess();

      // Set a timeout to clear the email and password fields after a short delay
      setTimeout(() => {
        setEmail('');
        setPassword('');
      }, 100);
    }
  };

  const handleSignup = () => {
    // Switch to signup mode
    setMode('signup');
  };

  const handleLogin = () => {
    // Switch to login mode
    setMode('login');
  };

  const handleClose = () => {
    // Call the onClose callback from the parent to close the login form
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <h2>{mode === 'login' ? 'Login' : 'Signup'}</h2>
        <p>Enter your email</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} required />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} required />
          </label>
          <div className="button-container">
            <button type="submit">{mode === 'login' ? 'Login' : 'Signup'}</button>
            <button type="button" className="signup-button" onClick={mode === 'login' ? handleSignup : handleLogin}>
              {mode === 'login' ? 'Signup' : 'Login'}
            </button>
          </div>
        </form>
        <p>{mode === 'login' ? 'Don’t have an account?' : 'Already have an account?'} <a href="#" onClick={mode === 'login' ? handleSignup : handleLogin}>
          {mode === 'login' ? 'Sign up' : 'Login'}
        </a></p>
      </div>
    </div>
  );
};

export default LoginForm;
