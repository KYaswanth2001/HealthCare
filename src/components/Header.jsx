import React from 'react';
import './Header.css';
import avatar from '../assets/avatar.png';

function Header() {
  return (
    <header className="header">
     
      <input className="search" placeholder="Search" disabled />
      <div className="header-icons">
        <i className="bell-icon" />
        <img src={avatar} alt="Profile" className="avatar" />
        
        <span className="avatar-name">Yaswanth</span>
        <button className="add-button">+</button>
      </div>
    </header>
  );
}

export default Header;
