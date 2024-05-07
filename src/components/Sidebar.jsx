import React from 'react';
import { Link } from 'react-router-dom';
import { useUI } from '../contexts/UIContext';

function Sidebar() {
  const { toggleUI } = useUI();

  const goHome = () => {
    window.location = '/';
  }

  return (
    <>
      <div id='sidebar' className='fixed z-40 w-60 h-full min-h-[40rem]'>
        <div id='sidebar-background' className='absolute z-30 h-full w-full bg-[#0000FF] -translate-x-full 2xl:transform-none [&.active]:transform-none transition duration-500 ease-in-out'/>
        <div id='sidebar-logo' onClick={goHome} className='relative z-30 h-fit w-full p-5 cursor-pointer origin-top-left translate-x-3 translate-y-3 scale-[0.3] md:translate-y-2 md:scale-[0.4] 2xl:transform-none [&.active]:transform-none [&.not-scroll]:transform-none transition duration-500 ease-in-out scroll'>
          <div id='sidebar-logo-container' className='relative h-40 w-full'>
            <img id='sidebar-logo-container-blue' src='/media/logos/blue/logo_tk.svg' alt='logo-blue' className='absolute opacity-100  2xl:opacity-0 [&.active]:opacity-0 transition duration-500 ease-in-out'/>
            <img id='sidebar-logo-container-creme' src='/media/logos/creme/logo_tk.svg' alt='logo-blue' className='absolute opacity-0  2xl:opacity-100 [&.active]:opacity-100 transition duration-500 ease-in-out'/>
          </div>
        </div>
        <nav id='sidebar-menu' className='relative z-40 w-full h-max invisible opacity-0 2xl:visible 2xl:opacity-100 [&.active]:visible [&.active]:opacity-100 transition duration-200 delay-200 ease-in-out'>
          <ul id='sidebar-menu-items' className='text-right text-2xl text-[#FFFDD0] font-extrabold'>
            <li className='py-5 hover:bg-[#FFFDD030]'><Link onClick={toggleUI} to='/' className='pr-6 pl-20 py-6'>home</Link></li>
            <li className='py-5 hover:bg-[#FFFDD030]'><Link onClick={toggleUI} to='/projects' className='pr-6 pl-20 py-6'>projects</Link></li>
            <li className='py-5 hover:bg-[#FFFDD030]'><Link onClick={toggleUI} to='/about' className='pr-6 pl-20 py-6'>about</Link></li>
            <li className='py-5 hover:bg-[#FFFDD030]'><Link onClick={toggleUI} to='/contact' className='pr-6 pl-20 py-6'>contact</Link></li>
          </ul>
        </nav>
        <div id='sidebar-text' className='absolute z-40 bottom-0 h-fit w-full p-5 invisible opacity-0 2xl:visible 2xl:opacity-100 [&.active]:visible [&.active]:opacity-100 transition duration-200 delay-200 ease-in-out'>
          <img id='sidebar-text-logo' src='/media/text/creme/text_thomaskimble.svg' alt='thomaskimble-creme' className='relative'/>
        </div>
      </div>
    </>
  );
}
export default Sidebar;