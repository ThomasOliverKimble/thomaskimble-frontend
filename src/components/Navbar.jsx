import React, { useState } from 'react';
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

  const scroll_toggle_elements = [
    "navbar",
    "navbar-side-logo",
    "navbar-top-background",
    "navbar-top-border",
    "navbar-top-text"
  ]

  const [navbarClick, setNavbarClick] = useState(false);

  const handleNavbarClick = () => {
    setNavbarClick(!navbarClick);
    document.getElementById("navbar").classList.toggle("overflow-y-auto")
    document.body.classList.toggle("no-scroll");
    for (const id of active_toggle_elements) {
      document.getElementById(id).classList.toggle("active")
    }
  }

  function scrollToggle() {
    if (window.scrollY > 0) {
      for (const id of scroll_toggle_elements) {
        document.getElementById(id).classList.add("scroll")
        document.getElementById(id).classList.remove("not-scroll")
      }
    } else {
      for (const id of scroll_toggle_elements) {
        document.getElementById(id).classList.remove("scroll")
        document.getElementById(id).classList.add("not-scroll")
      }
    }

    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    document.getElementById("scrollbar").style.transform = "translateY(" + percent + "%)";
  }

  function goHome() {
    window.location = '/';
  }

  function deactivateNavbar() {
    if (document.getElementById("navbar").classList.contains("active")) {
      handleNavbarClick()
    }
  }

  window.addEventListener('resize', deactivateNavbar);
  window.addEventListener('scroll', scrollToggle);

  return (
    <>
      <nav id='navbar' className='fixed z-30 w-full h-full'>
        <div id='navbar-side' className='absolute z-30 h-full w-60 min-h-[640px]'>
          <div id='navbar-side-background' className='absolute z-30 h-full w-full bg-[#0000FF] -translate-x-full xl:transform-none [&.active]:transform-none transition duration-500 ease-in-out'/>
          <div id='navbar-side-logo' onClick={goHome} className='relative z-30 h-fit w-full p-5 cursor-pointer origin-top-left translate-x-3 translate-y-3 scale-[0.3] md:translate-y-2 md:scale-[0.4] xl:transform-none [&.active]:transform-none [&.not-scroll]:transform-none transition duration-500 ease-in-out not-scroll'>
            <div id='navbar-side-logo-container' className='relative h-40 w-full'>
              <img id='navbar-side-logo-container-blue' src='/media/logos/blue/logo_tk_blob_fill.svg' alt='logo-blue' className='absolute opacity-100  xl:opacity-0 [&.active]:opacity-0 transition duration-500 ease-in-out'/>
              <img id='navbar-side-logo-container-creme' src='/media/logos/creme/logo_tk_blob_fill.svg' alt='logo-blue' className='absolute opacity-0  xl:opacity-100 [&.active]:opacity-100 transition duration-500 ease-in-out'/>
            </div>
          </div>
          <div id='navbar-side-menu' className='relative z-40 w-full h-max invisible opacity-0 xl:visible xl:opacity-100 [&.active]:visible [&.active]:opacity-100 transition duration-200 delay-200 ease-in-out'>
            <ul id='navbar-menu-items' className='text-right text-2xl text-[#FFFDD0]'>
              <li className='py-5 hover:bg-[#FFFDD030]'><Link onClick={handleNavbarClick} to='/' className='pr-6 pl-20 py-6'>Home</Link></li>
              <li className='py-5 hover:bg-[#FFFDD030]'><Link onClick={handleNavbarClick} to='/projects' className='pr-6 pl-20 py-6'>Projects</Link></li>
              <li className='py-5 hover:bg-[#FFFDD030]'><Link onClick={handleNavbarClick} to='/about' className='pr-6 pl-20 py-6'>About</Link></li>
              <li className='py-5 hover:bg-[#FFFDD030]'><Link onClick={handleNavbarClick} to='/contact' className='pr-6 pl-20 py-6'>Contact</Link></li>
            </ul>
          </div>
          <div id='navbar-side-text' className='absolute z-40 bottom-0 h-fit w-full p-5 invisible opacity-0 xl:visible xl:opacity-100 [&.active]:visible [&.active]:opacity-100 transition duration-200 delay-200 ease-in-out'>
            <img id='navbar-side-text-logo' src='/media/text/creme/text_thomaskimble.svg' alt='thomaskimble-creme' className='relative'/>
          </div>
        </div>
        <div id='navbar-hamburger' onClick={handleNavbarClick} className='absolute z-30 right-0 h-10 w-10 m-5 md:m-7 cursor-pointer visible opacity-100 xl:invisible xl:opacity-0 transition duration-200 ease-in-out'>
          <span/>
          <span/>
          <span/>
        </div>
        <div id='navbar-top' className='absolute z-10 h-[5rem] md:h-[6rem] w-full visible opacity-100 xl:invisible xl:opacity-0 transition duration-200 ease-in-out'>
          <span id='navbar-top-background' className='absolute h-full w-full bg-[#FFFDD0]'/>
          <span id='navbar-top-border' className='absolute top-[100%] h-[3px] w-full bg-[#0000FF] invisible opacity-0 [&.scroll]:visible [&.scroll]:opacity-100 transition duration-200 ease-in-out'/>
          <div id='navbar-top-text' className='relative m-auto h-fit w-60 py-6 md:py-8 invisible opacity-0 sm:visible sm:opacity-100 [&.not-scroll]:invisible [&.not-scroll]:opacity-0 transition duration-200 ease-in-out not-scroll'>
            <img id='navbar-top-text-logo' src='/media/text/blue/text_thomaskimble.svg' alt='thomaskimble-creme' className='relative'/>
          </div>
        </div>
        <div id='navbar-blur' onClick={handleNavbarClick} className='absolute bg-[#FFFDD030] z-20 h-full w-full min-h-[640px] backdrop-blur-sm invisible opacity-0 [&.active]:visible [&.active]:opacity-100 transition duration-500 ease-in-out'/>
        <span id='scrollbar' className='fixed z-0 -top-[calc(100%-6rem)] sm:-top-[calc(100%-5rem)] xl:-top-full right-0 h-full w-2 md:w-3 min-h-[640px] bg-[#0000FF]'></span>
      </nav>
    </>
  );
}

export default Navbar;
