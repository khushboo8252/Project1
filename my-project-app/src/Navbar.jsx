// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

const Navbar = () => {

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const toggleLoginModal = () => {
    setLoginModalOpen(!isLoginModalOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <img className='icon' src="https://www.revv.co.in/grapheneImages/newopen/Logo@2x.png" alt="" />
        <li className='nav-faq' ><Link to="/faq">FAQs</Link></li>
        <ul className="nav-links">
          <img src="https://www.revv.co.in/grapheneImages/newopen/ic-web-profile-login.svg" alt="" />
          <li><Link to="#login" onClick={toggleLoginModal}>Login or signup</Link></li>
        </ul>
        {isLoginModalOpen && <LoginForm onClose={toggleLoginModal} />}
      </div>
    </nav>
  );
}

export default Navbar;
