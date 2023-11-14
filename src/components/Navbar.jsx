import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const active_toggle_elements = [
    "navbar-background",
    "navbar-logo",
    "navbar-logo-container-creme",
    "navbar-logo-container-blue",
    "navbar-menu",
    "navbar-text",
    "hamburger",
    "backdrop"
  ]

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    document.body.classList.toggle("no-scroll");
    for (const id of active_toggle_elements) {
      document.getElementById(id).classList.toggle("active")
    }
  }

  const goHome = () => {
    window.location = '/';
  }

  return (
    <>
      <nav id='navbar' className='fixed z-40 w-60 h-full min-h-[40rem]'>
        <div id='navbar-background' className='absolute z-30 h-full w-full bg-[#0000FF] -translate-x-full xl:transform-none [&.active]:transform-none transition duration-500 ease-in-out'/>
        <div id='navbar-logo' onClick={goHome} className='relative z-30 h-fit w-full p-5 cursor-pointer origin-top-left translate-x-3 translate-y-3 scale-[0.3] md:translate-y-2 md:scale-[0.4] xl:transform-none [&.active]:transform-none [&.not-scroll]:transform-none transition duration-500 ease-in-out not-scroll'>
          <div id='navbar-logo-container' className='relative h-40 w-full'>
            <img id='navbar-logo-container-blue' src='/media/logos/blue/logo_tk_blob_fill.svg' alt='logo-blue' className='absolute opacity-100  xl:opacity-0 [&.active]:opacity-0 transition duration-500 ease-in-out'/>
            <img id='navbar-logo-container-creme' src='/media/logos/creme/logo_tk_blob_fill.svg' alt='logo-blue' className='absolute opacity-0  xl:opacity-100 [&.active]:opacity-100 transition duration-500 ease-in-out'/>
          </div>
        </div>
        <div id='navbar-menu' className='relative z-40 w-full h-max invisible opacity-0 xl:visible xl:opacity-100 [&.active]:visible [&.active]:opacity-100 transition duration-200 delay-200 ease-in-out'>
          <ul id='navbar-menu-items' className='text-right text-2xl text-[#FFFDD0]'>
            <li className='py-5 hover:bg-[#FFFDD030]'><Link onClick={handleClick} to='/' className='pr-6 pl-20 py-6'>Home</Link></li>
            <li className='py-5 hover:bg-[#FFFDD030]'><Link onClick={handleClick} to='/projects' className='pr-6 pl-20 py-6'>Projects</Link></li>
            <li className='py-5 hover:bg-[#FFFDD030]'><Link onClick={handleClick} to='/about' className='pr-6 pl-20 py-6'>About</Link></li>
            <li className='py-5 hover:bg-[#FFFDD030]'><Link onClick={handleClick} to='/contact' className='pr-6 pl-20 py-6'>Contact</Link></li>
          </ul>
        </div>
        <div id='navbar-text' className='absolute z-40 bottom-0 h-fit w-full p-5 invisible opacity-0 xl:visible xl:opacity-100 [&.active]:visible [&.active]:opacity-100 transition duration-200 delay-200 ease-in-out'>
          <img id='navbar-text-logo' src='/media/text/creme/text_thomaskimble.svg' alt='thomaskimble-creme' className='relative'/>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
