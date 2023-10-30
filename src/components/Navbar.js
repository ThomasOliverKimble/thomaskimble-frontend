import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const navbarHandler = () => setClick(!click);

  return (
    <>
      <nav className='navbar'>
        <div className={'navbar-hamburger ' + (click ? 'active' : '')} onClick={navbarHandler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={'navbar-logo ' + (click ? 'active' : '')}>
          <div className={'navbar-logo-svg navbar-logo-cream ' + (click ? 'active' : '')}/>
          <div className={'navbar-logo-svg navbar-logo-blue ' + (click ? 'active' : '')}/>
        </div>
        <div className={'navbar-background ' + (click ? 'active' : '')} />
        <div className={'navbar-menu ' + (click ? 'active' : '')} >
          <ul className='navbar-menu-items'>
            <li><Link onClick={navbarHandler} to='/'>Home</Link></li>
            <li><Link onClick={navbarHandler} to='/projects'>Projects</Link></li>
            <li><Link onClick={navbarHandler} to='/about'>About</Link></li>
          </ul>
        </div>
        <div className={'navbar-blur ' + (click ? 'active' : '')}></div>
      </nav>
    </>
  );
}

export default Navbar;