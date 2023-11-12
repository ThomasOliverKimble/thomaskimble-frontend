import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const active_toggle_elements = [
    "navbar",
    "navbar-side-background",
    "navbar-side-logo",
    "navbar-side-logo-container-creme",
    "navbar-side-logo-container-blue",
    "navbar-side-menu",
    "navbar-side-text",
    "navbar-hamburger",
    "navbar-blur"
  ]

  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarClick, setNavbarClick] = useState(false);

  const handleScroll = () => setScrollPosition(window.scrollY);
  const handleNavbarClick = () => {
    setNavbarClick(!navbarClick);
    document.body.classList.toggle("no-scroll");
    for (const id of active_toggle_elements) {
      document.getElementById(id).classList.toggle("active")
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function goHome() {
    window.location = '/';
  }

  function deactivateNavbar() {
    document.body.style.overflow = "auto";
    if (!navbarClick) {
      setNavbarClick(navbarClick);
    }
  }

  window.addEventListener('resize', deactivateNavbar);

  return (
    <>
      <nav id='navbar'>
        <div id='navbar-side' className='absolute z-30 h-full w-60 min-h-[640px]'>
          <div id='navbar-side-background' className='absolute z-30 h-full w-full bg-[#0000FF] -translate-y-full xl:transform-none [&.active]:transform-none'/>
          <div id='navbar-side-logo' onClick={goHome} className='relative z-30 h-fit w-full p-5 cursor-pointer origin-top-left translate-y-2 scale-[0.4] xl:transform-none [&.active]:transform-none'>
            <div id='navbar-side-logo-container' className='relative h-40 w-full'>
              <img id='navbar-side-logo-container-blue' src='/media/logos/blue/logo_tk_blob_fill.svg' alt='logo-blue' className='absolute visible opacity-100 xl:invisible xl:opacity-0 [&.active]:invisible [&.active]:opacity-0'/>
              <img id='navbar-side-logo-container-creme' src='/media/logos/creme/logo_tk_blob_fill.svg' alt='logo-blue' className='absolute invisible opacity-0 xl:visible xl:opacity-100 [&.active]:visible [&.active]:opacity-100'/>
            </div>
          </div>
          <div id='navbar-side-menu' className='relative z-40 w-full h-max invisible opacity-0 xl:visible xl:opacity-100 [&.active]:visible [&.active]:opacity-100'>
            <ul id='navbar-menu-items' className='text-right text-2xl text-[#FFFDD0]'>
              <li className='py-5 hover:bg-[#FFFDD030]'><Link onClick={handleNavbarClick} to='/' className='pr-6 pl-20 py-6'>Home</Link></li>
              <li className='py-5 hover:bg-[#FFFDD030]'><Link onClick={handleNavbarClick} to='/projects' className='pr-6 pl-20 py-6'>Projects</Link></li>
              <li className='py-5 hover:bg-[#FFFDD030]'><Link onClick={handleNavbarClick} to='/about' className='pr-6 pl-20 py-6'>About</Link></li>
              <li className='py-5 hover:bg-[#FFFDD030]'><Link onClick={handleNavbarClick} to='/contact' className='pr-6 pl-20 py-6'>Contact</Link></li>
            </ul>
          </div>
          <div id='navbar-side-text' className='absolute z-40 bottom-0 h-fit w-full p-5 invisible opacity-0 xl:visible xl:opacity-100 [&.active]:visible [&.active]:opacity-100'>
            <img id='navbar-side-text-logo' src='/media/text/creme/text_thomaskimble.svg' alt='thomaskimble-creme' className='relative'/>
          </div>
        </div>
        <div id='navbar-hamburger' onClick={handleNavbarClick} className='absolute z-30 right-0 h-10 w-10 m-7 cursor-pointer visible opacity-100 xl:invisible xl:opacity-0'>
          <span/>
          <span/>
          <span/>
        </div>
        <div id='navbar-top' className='absolute z-10 h-[6rem] w-full min-w-[20rem] visible opacity-100 xl:invisible xl:opacity-0'>
          <div id='navbar-top-background' className='absolute h-full w-full bg-[#FFFDD0]'/>
          <div id='navbar-top-border' className='absolute top-[100%] h-1 w-full bg-[#0000FF]'/>
          <div id='navbar-top-text' className='relative m-auto h-fit w-60 py-8 invisible opacity-0 sm:visible sm:opacity-100'>
            <img id='navbar-top-text-logo' src='/media/text/blue/text_thomaskimble.svg' alt='thomaskimble-creme' className='relative'/>
          </div>
        </div>
        <div id='navbar-blur' className='absolute z-20 w-full h-full backdrop-blur-sm invisible opacity-0 [&.active]:visible [&.active]:opacity-100'/>
      </nav>
    </>
  );
}

export default Navbar;
