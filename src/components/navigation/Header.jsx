import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header id='header' className='fixed z-20 h-[6rem] transform -translate-y-4 md:translate-y-0 2xl:-translate-y-full w-full visible opacity-100 2xl:invisible 2xl:opacity-0 transition duration-500 ease-in-out'>
        <span id='header-background' className='absolute h-full w-full'/>
        <span id='header-border' className='absolute top-[100%] h-[3px] w-full bg-[#0000FF] invisible opacity-0 [&.scroll]:visible [&.scroll]:opacity-100 transition duration-500 ease-in-out'/>
        <div id='header-text' className='relative m-auto h-fit w-60 transform translate-y-9 md:translate-y-7 invisible opacity-0 sm:visible sm:opacity-100 lg:invisible lg:opacity-0 [&.not-scroll]:invisible [&.not-scroll]:opacity-0 transition duration-500 ease-in-out not-scroll'>
          <img id='header-text-logo' src='/media/text/blue/text_thomaskimble.svg' alt='thomaskimble-creme' className='relative'/>
        </div>
        <nav className='flex invisible opacity-0 lg:visible lg:opacity-100 2xl:invisible 2xl:opacity-0 absolute right-0 top-0 h-full items-center pr-10 text-2xl font-extrabold transition duration-500 ease-in-out'>
          <ul className='flex space-x-4 md:space-x-8'>
            <li><Link to='/' className='text-[#0000FF] hover:text-[#AAAAFF]'>home</Link></li>
            <li><Link to='/projects' className='text-[#0000FF] hover:text-[#AAAAFF]'>projects</Link></li>
            <li><Link to='/about' className='text-[#0000FF] hover:text-[#AAAAFF]'>about</Link></li>
            <li><Link to='/contact' className='text-[#0000FF] hover:text-[#AAAAFF]'>contact</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
