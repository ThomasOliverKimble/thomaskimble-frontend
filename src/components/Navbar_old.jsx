import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarClick, setNavbarClick] = useState(false);

  const handleScroll = () => setScrollPosition(window.scrollY);
  const handleNavbarClick = () => {
    setNavbarClick(!navbarClick);
    if (navbarClick) {
      document.body.classList.remove("no-scroll");
    } else {
      document.body.classList.add("no-scroll");
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function deactivateNavbar() {
    document.body.style.overflow = "auto";
    if (!navbarClick) {
      setNavbarClick(navbarClick);
    }
  }

  window.addEventListener('resize', deactivateNavbar);

  return (
    <>
      <nav className={'navbar ' + (navbarClick ? 'active ' : '') + (scrollPosition > 5 ? 'scroll' : '')}>
        <div className='navbar-top'/>
        <div className='navbar-top-border'/>
        <div className='navbar-left'/>
        <div className={'navbar-hamburger '} onClick={handleNavbarClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className='navbar-logo'>
          <div className='navbar-logo-svg navbar-logo-creme'/>
          <div className='navbar-logo-svg navbar-logo-blue'/>
        </div>
        <div className='navbar-text'>
          <div className='navbar-text-logo'/>
        </div>
        <div className='navbar-footer'>
          <div className='navbar-footer-logo'/>
        </div>
        <div className='navbar-menu'>
          <ul className='navbar-menu-items'>
            <li><Link onClick={handleNavbarClick} to='/'>Home</Link></li>
            <li><Link onClick={handleNavbarClick} to='/projects'>Projects</Link></li>
            <li><Link onClick={handleNavbarClick} to='/about'>About</Link></li>
            <li><Link onClick={handleNavbarClick} to='/contact'>Contact</Link></li>
          </ul>
        </div>
        <div className='navbar-blur'></div>
      </nav>
    </>
  );
}

export default Navbar;