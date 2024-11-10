import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">My Company</div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <a href="#menu1">Menu1</a>
        <a href="#menu2">Menu2</a>
        <a href="#menu3">Menu3</a>
      </nav>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
};

export default Header;
