import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [navbarClick, setNavbarClick] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(false);

  const handleNavbarClick = () => {
    setNavbarClick(!navbarClick);
    if (navbarClick) {
      document.body.style.overflow = "auto"
    } else {
      document.body.style.overflow = "hidden"
    }
  }
  const handleScroll = () => setScrollPosition(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function deactivateNavbar() {
    document.body.style.overflow = "auto"
    if (!navbarClick) {
      setNavbarClick(navbarClick);
    }
  }
  window.addEventListener('resize', deactivateNavbar);

  return (
    <>
      <nav className={'navbar ' + (navbarClick ? 'active ' : '') + (scrollPosition !== 0 ? 'scroll' : '')}>
        <div className='navbar-top'>
          <div className={'navbar-top-background '}/>
          <div className={'navbar-top-border '}/>
          <div className='navbar-top-container'>
            <div className={'navbar-top-container-hamburger '} onClick={handleNavbarClick}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className='navbar-top-container-logo'>
              <div className='navbar-top-container-logo-svg navbar-top-container-logo-blue-no-text'></div>
              <div className='navbar-top-container-logo-svg navbar-top-container-logo-cream'/>
              <div className='navbar-top-container-logo-svg navbar-top-container-logo-blue'/>
            </div>
          </div>
        </div>
        <div className='navbar-background'/>
        <div className='navbar-menu'>
          <ul className='navbar-menu-items'>
            <li><Link onClick={handleNavbarClick} to='/'>Home</Link></li>
            <li><Link onClick={handleNavbarClick} to='/projects'>Projects</Link></li>
            <li><Link onClick={handleNavbarClick} to='/about'>About</Link></li>
          </ul>
        </div>
        <div className='navbar-blur'></div>
      </nav>
    </>
  );
}

export default Navbar;