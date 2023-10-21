import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className={click ? 'navbar-background active' : 'navbar-background'}></div>
        <div className={click ? 'navbar-container active' : 'navbar-container'}>
          <div className='navbar-top'>
            <div className={click ? 'navbar-top-background active' : 'navbar-top-background'}></div>
            <div className={click ? 'menu-icon active' : 'menu-icon'} onClick={handleClick}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <Link to='/' className={click ? 'navbar-logo active' : 'navbar-logo'} onClick={closeMobileMenu}></Link>
          </div>
          <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
            <li className='navbar-item'>
              <Link to='/' className='navbar-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='navbar-item'>
              <Link to='/projects' className='navbar-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className='navbar-item'>
              <Link to='/about' className='navbar-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;