import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [navbarClick, setNavbarClick] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(false);

  const handleNavbarClick = () => setNavbarClick(!navbarClick);
  const handleScroll = () => setScrollPosition(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className='navbar'>
        <div className={'navbar-top ' + (scrollPosition != 0 ? 'scroll' : '')}/>
        <div className={'navbar-hamburger ' + (navbarClick ? 'active' : '')} onClick={handleNavbarClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={'navbar-logo ' + (navbarClick ? 'active' : '')}>
          <div className={'navbar-logo-svg navbar-logo-cream ' + (navbarClick ? 'active' : '')}/>
          <div className={'navbar-logo-svg navbar-logo-blue ' + (navbarClick ? 'active' : '')}/>
        </div>
        <div className={'navbar-background ' + (navbarClick ? 'active' : '')} />
        <div className={'navbar-menu ' + (navbarClick ? 'active' : '')} >
          <ul className='navbar-menu-items'>
            <li><Link onClick={handleNavbarClick} to='/'>Home</Link></li>
            <li><Link onClick={handleNavbarClick} to='/projects'>Projects</Link></li>
            <li><Link onClick={handleNavbarClick} to='/about'>About</Link></li>
          </ul>
        </div>
        <div className={'navbar-blur ' + (navbarClick ? 'active' : '')}></div>
      </nav>
    </>
  );
}

export default Navbar;